import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const apiKey = process.env.GEMINI_API_KEY!;

export async function generateMentorResponse(messages: Message[]) {
  const ai = new GoogleGenAI({ apiKey });
  // Convert messages to Gemini format
  const history = messages.slice(0, -1).map(m => ({
    role: m.role,
    parts: [{ text: m.text }]
  }));

  const chat = ai.chats.create({
    model: "gemini-3-flash-preview",
    history,
    config: {
      systemInstruction: "You are 'SphereAI', a friendly and expert mentor for SkillSphere, an EdTech platform. Your goal is to help students learn coding, design, and career skills. Be encouraging, provide clear explanations, and suggest practical projects. Keep responses concise but informative.",
    },
  });

  const lastMessage = messages[messages.length - 1].text;
  
  const response = await chat.sendMessage({ message: lastMessage });
  return response.text;
}

export async function getCareerGuidance(profile: string) {
  const ai = new GoogleGenAI({ apiKey });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Based on this student profile, provide a structured career roadmap with 3 key milestones, recommended skills to learn, and potential job roles. Profile: ${profile}`,
    config: {
      systemInstruction: "You are a career counselor. Provide responses in a structured Markdown format with clear headings.",
    },
  });
  return response.text;
}
