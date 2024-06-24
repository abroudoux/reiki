export const login = async (identifier: string, password: string) => {
  const adminIdentifier = import.meta.env.VITE_ADMIN_IDENTIFIER;
  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

  if (identifier === adminIdentifier && password === adminPassword) {
    return true;
  }

  return false;
};
