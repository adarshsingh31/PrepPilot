import api from "../api/axios";

export const getAnalytics = async () => {
  const response = await api.get("/analytics");
  return response.data;
};

export const getUserStats = async () => {
  const response = await api.get("/analytics/stats");
  return response.data;
};
