const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ============================
// Generate Interview Questions
// ============================
const generateInterviewQuestions = async (domain, difficulty, duration) => {
  const questionCountMap = {
    15: 3,
    30: 5,
    45: 8,
    60: 10,
  };

  const numberOfQuestions = questionCountMap[duration] || 5;

  const prompt = `
You are a Senior Software Engineer at a top product company like Google, Amazon, Microsoft, Meta, or D. E. Shaw.

Generate exactly ${numberOfQuestions} interview questions.

Interview Details:
- Domain: ${domain}
- Difficulty: ${difficulty}
- Duration: ${duration} minutes

Requirements:

- Generate exactly ${numberOfQuestions} questions.
- Match the selected difficulty level.
- Start with easier questions and gradually increase difficulty.
- Cover different concepts within the selected domain.
- Avoid duplicate questions.
- Questions should resemble real software engineering interviews.
- Keep questions concise.
- Do NOT include answers.
- Return ONLY valid JSON.

{
  "questions": [
    "Question 1",
    "Question 2"
  ]
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text.trim();
};

// ============================
// Evaluate Answer
// ============================
const evaluateAnswer = async (question, answer) => {
  const prompt = `
You are an expert technical interviewer.

Question:
${question}

Candidate Answer:
${answer}

Evaluate the answer. Give a score out of 100.

Return ONLY valid JSON.

{
  "score": 0,
  "feedback": ""
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text.trim();
};

// ============================
// Generate Final Interview Report
// ============================
const generateInterviewReport = async (questions, overallScore) => {
  const prompt = `
You are an expert Software Engineering Interviewer.

The candidate has completed a mock interview.

Overall Score: ${overallScore}/100

Interview Questions:

${questions
  .map(
    (q, index) => `
Question ${index + 1}
${q.question}

Candidate Answer:
${q.answer}

AI Feedback:
${q.feedback}

Score:
${q.score}/100
`,
  )
  .join("\n")}

Analyze the complete interview.

Return ONLY valid JSON.

{
  "summary": "",
  "strengths": [
    "",
    "",
    ""
  ],
  "improvements": [
    "",
    "",
    ""
  ]
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text.trim();
};

module.exports = {
  generateInterviewQuestions,
  evaluateAnswer,
  generateInterviewReport,
};
