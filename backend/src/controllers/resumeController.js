const pdfParse = require("pdf-parse");
const { analyzeResumeWithAI } = require("../services/resumeAnalyzerService");
const analyzeResume = async (req, res) => {
  try {
    // Check if file exists
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a PDF file",
      });
    }

    // Extract text from PDF
    const pdfData = await pdfParse(req.file.buffer);
    const aiResponse = await analyzeResumeWithAI(pdfData.text);

    const cleanedResponse = aiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const analysis = JSON.parse(cleanedResponse);

    res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeResume,
};
