import api from "../api/axios";

/**
 * Fetch all user question progress documents
 * @returns {Promise<Object>} API response data
 */
export const getUserQuestions = async () => {
  const response = await api.get("/user-questions");
  return response.data;
};

/**
 * Update or create progress for a specific question
 * @param {String} questionId - The question ID
 * @param {Object} data - Update payload (status, bookmarked, notes, attempts, etc.)
 * @returns {Promise<Object>} API response data
 */
export const updateUserQuestion = async (questionId, data) => {
  const response = await api.put(`/user-questions/${questionId}`, data);
  return response.data;
};
