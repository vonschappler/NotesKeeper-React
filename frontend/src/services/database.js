import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const sendForm = async (formData) => {
  await axios.post(`${SERVER_URL}/notes`, formData);
};
