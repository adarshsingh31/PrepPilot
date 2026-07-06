import api from "../api/axios";

export const analyzeResume = async (formData) => {
  const response = await api.post("/resume/analyze", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
