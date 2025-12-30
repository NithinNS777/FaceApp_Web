import { mockStudent } from "../data/mockStudent";

// simulate backend login
export const loginService = async ({ rollNumber, password }) => {
  // later replace with:
  // return axios.post("/auth/login", { rollNumber, password });

  if (!rollNumber) {
    throw new Error("Roll number required");
  }

  return {
    token: "mock-jwt-token",
    user: mockStudent,
  };
};

export const logoutService = async () => {
  return true;
};
