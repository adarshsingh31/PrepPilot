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
  "summary": "Executive summary of the resume evaluation",
  "contentScore": 0,
  "structureScore": 0,
  "skillsScore": 0,
  "atsScore": 0,
  "strengths": ["Strength 1", "Strength 2"],
  "improvements": ["Improvement 1", "Improvement 2"],
  "atsTips": ["Tip 1", "Tip 2"],
  "missingKeywords": ["keyword1", "keyword2"],
  "skills": ["Skill 1", "Skill 2", "Skill 3"],
  "finalRecommendation": "Recruiter recommendation advice"
}

Resume:

${resumeText}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: prompt,
  });

  return response.text;
};

module.exports = {
  analyzeResumeWithAI,
};
