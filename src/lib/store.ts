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
  sessions: [],
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
