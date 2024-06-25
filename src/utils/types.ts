export type Session = {
  id?: string;
  firstName: string;
  lastName: string;
  date: Date;
  status: "en attente" | "validé" | "annulé";
};
