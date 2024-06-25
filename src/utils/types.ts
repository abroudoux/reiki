export type Session = {
  id?: string;
  firstName: string;
  lastName: string;
  date: string;
  status: "en attente" | "validé" | "annulé";
};
