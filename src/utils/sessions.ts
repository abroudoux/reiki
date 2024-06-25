export const createSession = async (firstName: string, lastName: string, date: Date) => {
  const today = new Date();

  if (!validateSession(firstName, lastName, date, today)) {
    return false;
  }

  return true;
};

const validateSession = (firstName: string, lastName: string, date: Date, today: Date) => {
  if (!firstName || !lastName || !date) {
    return false;
  }

  if (date < today) {
    return false;
  }

  return true;
};
