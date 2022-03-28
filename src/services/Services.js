import axios from "axios";

export const loginServices = async (email, password) =>
  await axios.post("/api/auth/login", { email, password });

export const signUpServices = async (name, email, password) =>
  await axios.post("/api/auth/signup", { email, password, name });

export const postNote = async ({ note, token }) =>
  await axios.post(
    "/api/notes",
    { note },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const editNote = async ({ note, token }) =>
  await axios.post(
    `/api/notes/${note._id}`,
    { note },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteNote = async (id, { token }) =>
  await axios.delete(`/api/notes/${id}`, {
    headers: {
      authorization: token,
    },
  });
