const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const analyzeResumeWithAI = async (resumeText) => {
  const prompt = `
You are an expert ATS Resume Analyzer.

Analyze the following resume.

Return ONLY valid JSON.

The JSON format must be:

{
  "score": 0,
  "summary": "",
  "contentScore": 0,
  "structureScore": 0,
  "skillsScore": 0,
  "atsScore": 0,
  "strengths": [],
  "improvements": [],
  "atsTips": [],
  "missingKeywords": [],
  "skills": [],
  "finalRecommendation": ""
}

Resume:

${resumeText}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
};

module.exports = {
  analyzeResumeWithAI,
};
