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

export const deleteTrash = async (id, { token }) =>
  await axios.delete(`/api/trash/delete/${id}`, {
    headers: {
      authorization: token,
    },
  });

export const archiveNote = async (id, { token, note }) =>
  await axios.post(
    `/api/notes/archives/${id}`,
    { note },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const restoreNote = async (id, { token }) =>
  await axios.post(
    `/api/archives/restore/${id}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteArchive = async (id, { token }) =>
  await axios.delete(`/api/archives/delete/${id}`, {
    headers: {
      authorization: token,
    },
  });

export const trashNote = async (id, { note, token }) =>
  await axios.post(
    `/api/notes/trash/${id}`,
    { note },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const trashToNote = async (id, { token }) =>
  await axios.post(
    `/api/trash/restore/${id}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
