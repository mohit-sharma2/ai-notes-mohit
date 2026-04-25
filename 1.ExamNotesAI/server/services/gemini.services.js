
// const Gemini_URL = 
// "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent"

// export const generateGeminiResponse = async (prompt) => {

//     try {
//          const response = await fetch(`${Gemini_URL}?key=${process.env.GEMINI_API_KEY}`,{
//         method:"POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [
//                 {
//                   text: prompt
//                 }
//               ]
//             }
//           ]
//         })

//     })

//     if (!response.ok) {
//       const err = await response.text();
//       throw new Error(err);
//     }

//     const data = await response.json()

//     const text =
//       data.candidates?.[0]?.content?.parts?.[0]?.text;

//     if (!text) {
//       throw new Error("No text returned from Gemini");
//     }

//     const cleanText = text
//       .replace(/```json/g, "")
//       .replace(/```/g, "")
//       .trim();

//       return JSON.parse(cleanText);



//     } catch (error) {
//         console.error("Gemini Fetch Error:", error.message);
//     throw new Error("Gemini API fetch failed");
//     }
// }

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "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",
  baseURL: "https://api.groq.com/openai/v1",
});

export const generateGeminiResponse = async (prompt) => {
  try {
    const completion = await client.chat.completions.create({
      model: "openai/gpt-oss-120b", // ya koi bhi groq model
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const text = completion.choices[0]?.message?.content;

    if (!text) {
      throw new Error("No text returned from Groq");
    }

    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanText);
    
  } catch (error) {
    console.error("Groq Fetch Error:", error.message);
    throw new Error("Groq API fetch failed");
  }
};
   



