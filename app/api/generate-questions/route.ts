// app/api/generate-questions/route.ts
import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

// Define the response schema using modern @google/genai types
const questionSchema = {
  type: "object", // Cambiado a object en la raíz para mayor estabilidad con responseSchema
  properties: {
    questions: {
      type: "array",
      description: "A list of MET-style exam questions",
      items: {
        type: "object",
        properties: {
          id: { type: "integer" },
          question: { type: "string" },
          options: {
            type: "array",
            items: { type: "string" },
            description: "Exactly 4 options",
          },
          answer: { type: "string", description: "Must match one item in the options array exactly" },
          category: {
            type: "string",
            enum: ["Grammar", "Vocabulary", "Cloze", "Reading"],
          },
          passage: { type: "string", description: "Mandatory for Reading category. Leave empty or omit for others." },
          rationale: { type: "string", description: "Academic explanation of the answer" },
        },
        required: ["id", "question", "options", "answer", "category", "rationale"],
      },
    }
  },
  required: ["questions"]
};

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY is not configured" }, { status: 500 });
    }

    // 1. Inicializar el cliente de la SDK moderna de Google Gen AI
    const client = new GoogleGenAI({ apiKey });

    // 2. Capturar los parámetros enviados desde el frontend en paralelo
    const body = await req.json();
    const category = body.category || "Grammar"; 
    const amount = Math.min(Math.max(Number(body.amount) || 5, 1), 15);

    // 3. Crear el prompt adaptado dinámicamente a la sección solicitada
    const systemPrompt = `
      Act as an official Michigan English Test (MET) content writer.
      Your task is to generate exactly ${amount} English proficiency questions strictly for the '${category}' category.
      
      STRICT REQUIREMENTS:
      1. DIFFICULTY: Questions must range across CEFR levels A2 to C1.
      2. TARGET SKILL: You must ONLY generate questions that belong to the '${category}' category.
      3. READING ITEMS: If the category is 'Reading', you MUST craft a high-quality, professional academic passage for the questions to reference. If the category is NOT 'Reading', do not include a passage.
      4. ACCURACY: The 'answer' string must be an EXACT character-for-character match of one of the 4 strings in the 'options' array.
      5. RATIONALE: Provide a clear, professional academic explanation for why the answer is correct.
      6. LANGUAGE: All content must be written in pristine, professional English suitable for a standardized exam.
    `;

    // 4. Llamada estructurada nativa a gemini-2.5-flash
    const result = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: systemPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: questionSchema,
      },
    });

    const text = result.text;

    if (!text) {
      return NextResponse.json({ error: "Received empty text from Gemini" }, { status: 500 });
    }

    try {
      const data = JSON.parse(text);
      // Extraemos el array del envoltorio del esquema de objetos para no romper tu frontend
      return NextResponse.json(data.questions || data);
    } catch (parseError) {
      console.error("JSON Parsing Error:", text);
      return NextResponse.json({ 
        error: "Failed to parse AI response into valid JSON",
        raw: text 
      }, { status: 500 });
    }

  } catch (error: any) {
    console.error("MET Question Generation Error:", error);
    return NextResponse.json(
      { error: "An error occurred during content generation", message: error.message },
      { status: 500 }
    );
  }
}