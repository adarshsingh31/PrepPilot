import api from "../api/axios";

export const analyzeResume = async (formData) => {
  const response = await api.post("/resume/analyze", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const getResumeHistory = async () => {
  const response = await api.get("/resume/history");
  return response.data;
};
