import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://events-task-backend.onrender.com/api/events",
});

export const requestEvents = async () => {
    const { data } = await authInstance.get("/");
  return data;
};