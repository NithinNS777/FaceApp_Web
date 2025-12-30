import api from "./axios";

export const getStudentByRollNumber = async (rollNumber) => {
  const response = await api.get(`/api/students/${rollNumber}`);
  return response.data;
};
