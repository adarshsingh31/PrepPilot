import api from "../api/axios";

export const getMilestones = async () => {
  const timestamp = new Date().getTime(); // Prevent caching
  const response = await api.get(`/analytics/milestones?_t=${timestamp}`);
  return response.data;
};
