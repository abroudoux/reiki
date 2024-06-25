import { create } from "zustand";
import type { Session } from "@/utils/types";

interface Store {
  token: boolean;
  isLoading: boolean;
  sessions: Session[];
  signIn: () => void;
  signOut: () => void;
  setIsLoading: (value: boolean) => void;
  addSession: (session: Session) => void;
}

const useStore = create<Store>((set) => ({
  token: false,
  isLoading: false,
  sessions: [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      date: "2021-09-01",
      status: "en attente"
    },
    {
      id: "2",
      firstName: "John",
      lastName: "Test",
      date: "2021-09-02",
      status: "annulé"
    },
    {
      id: "3",
      firstName: "John",
      lastName: "Doe",
      date: "2021-09-03",
      status: "validé"
    }
  ],
  signIn: () => {
    set({ token: true });
    localStorage.setItem("token", JSON.stringify(true));
  },
  signOut: () => {
    set({ token: false });
    localStorage.removeItem("token");
  },
  setIsLoading: (value: boolean) => set({ isLoading: value }),
  addSession: (session: Session) =>
    set((state) => ({
      sessions: [...state.sessions, session]
    }))
}));

export default useStore;
