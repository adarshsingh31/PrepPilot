import api from "../api/axios";

// Register User
export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

// Login User
export const loginUser = async (userData) => {
  const response = await api.post("/auth/login", userData);
  return response.data;
};

// Get Profile
export const getProfile = async () => {
  const response = await api.get("/auth/profile");
  return response.data;
};

// Update Profile
export const updateProfile = async (userData) => {
  const response = await api.put("/auth/profile", userData);
  return response.data;
};

// Change Password
export const changePassword = async (passwordData) => {
  const response = await api.put("/auth/change-password", passwordData);
  return response.data;
};
