import api from "../api/axios";

export const getStudyPlans = async () => {
  const response = await api.get("/study-plans");
  return response.data;
};

export const createStudyPlan = async ({ title, targetDate }) => {
  const response = await api.post("/study-plans", { title, targetDate });
  return response.data;
};

export const updateStudyPlan = async (id, updates) => {
  // updates can contain: title, targetDate, status, progress
  const response = await api.put(`/study-plans/${id}`, updates);
  return response.data;
};
