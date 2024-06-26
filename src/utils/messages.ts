export const createMessage = async (
  firstName: string,
  lastName: string,
  mail: string,
  message: string
) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        mail,
        message
      })
    });
    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
};
