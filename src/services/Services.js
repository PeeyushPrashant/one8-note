import axios from "axios";

export const loginServices = async (email, password) =>
  await axios.post("/api/auth/login", { email, password });

export const signUpServices = async (name, email, password) =>
  await axios.post("/api/auth/signup", { email, password, name });
