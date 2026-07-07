import api from "../api/axios";

export const getTimeStats = async () => {
  const response = await api.get(`/analytics/time-stats?_t=${Date.now()}`);
  return response.data;
};

export const trackTime = async (moduleName, durationSeconds) => {
  if (!durationSeconds || durationSeconds < 5) return; // Ignore very short sessions
  await api.post("/analytics/track-time", { moduleName, durationSeconds });
};
