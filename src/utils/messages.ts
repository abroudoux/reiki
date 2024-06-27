import { formatDate } from "@/utils/date";

export const createMessage = async (
  firstName: string,
  lastName: string,
  email: string,
  message: string,
  today: Date
) => {
  try {
    const date: string = formatDate(today);
    const response = await fetch(`${import.meta.env.VITE_API_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        message,
        date
      })
    });
    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const fetchMessages = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/messages`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return;
  }
};
