import { formatDate } from "@/utils/date";

export const createSession = async (
  firstName: string,
  lastName: string,
  email: string,
  date: Date
) => {
  try {
    const dateString = formatDate(date);
    const response = await fetch(`${import.meta.env.VITE_API_URL}/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ firstName, lastName, email, date })
    });
    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const fetchSessions = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/sessions`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return;
  }
};
