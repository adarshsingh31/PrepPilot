import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/mock-interview`;

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const handleError = (error, defaultMessage) => {
  if (error.response) {
    const status = error.response.status;
    const msg = error.response.data?.message;
    if (status === 401) throw new Error("Unauthorized. Please log in again.");
    if (status === 404) throw new Error("Resource not found.");
    if (status === 429) throw new Error("Too many requests. Please slow down.");
    if (status === 503)
      throw new Error("Service unavailable. Try again later.");
    throw new Error(msg || defaultMessage);
  } else if (error.request) {
    throw new Error("Network error. Please check your connection.");
  } else {
    throw new Error(error.message || defaultMessage);
  }
};

export const startInterview = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/start`,
      data,
      getAuthHeaders(),
    );
    return response.data;
  } catch (error) {
    handleError(error, "Failed to start interview.");
  }
};

export const submitAnswer = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/answer`,
      data,
      getAuthHeaders(),
    );
    return response.data;
  } catch (error) {
    handleError(error, "Failed to submit answer.");
  }
};

export const finishInterview = async (interviewId) => {
  try {
    const response = await axios.post(
      `${API_URL}/finish`,
      { interviewId },
      getAuthHeaders(),
    );
    return response.data;
  } catch (error) {
    handleError(error, "Failed to finish interview.");
  }
};

export const getHistory = async () => {
  try {
    const response = await axios.get(`${API_URL}/history`, getAuthHeaders());
    return response.data;
  } catch (error) {
    handleError(error, "Failed to fetch history.");
  }
};

export const getInterviewById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    handleError(error, "Failed to fetch interview details.");
  }
};
