import api from "../api/axios";

/**
 * Fetch questions from the backend
 * @param {Object} params - Query parameters (topic, difficulty, importance)
 * @returns {Promise<Object>} API response data
 */
export const getQuestions = async (params = {}) => {
  const response = await api.get("/questions", { params });
  return response.data;
};
