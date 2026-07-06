const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
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
- Keep questions concise and practical.
- Do NOT include answers.
- Return ONLY valid JSON.

Examples of domain coverage:

DSA:
Arrays, Strings, Linked Lists, Trees, Graphs, DP, Greedy, Binary Search

Frontend:
HTML, CSS, JavaScript, React, Browser, Performance

Backend:
Node.js, Express.js, REST APIs, Authentication, JWT, MongoDB, SQL, Caching

Full Stack:
Frontend + Backend + Database + Authentication + Deployment

System Design:
Scalability, Load Balancer, Caching, Database, CDN

DBMS:
Normalization, Indexing, Transactions, Joins

Operating Systems:
Process, Thread, Deadlock, Paging, Scheduling

OOPs:
Inheritance, Polymorphism, Abstraction, Encapsulation, SOLID

HR:
Behavioral, Teamwork, Leadership, Conflict Resolution

Return ONLY:

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
const evaluateAnswer = async (question, answer) => {
  const prompt = `
You are an expert technical interviewer.

Evaluate the candidate's answer.

Question:
${question}

Candidate Answer:
${answer}

Give constructive feedback.

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
module.exports = {
  generateInterviewQuestions,
  evaluateAnswer,
};
