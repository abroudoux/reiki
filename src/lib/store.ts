import { create } from "zustand";

interface Store {
  token: boolean;
  isLoading: boolean;
  signIn: () => void;
  signOut: () => void;
  setIsLoading: (value: boolean) => void;
}

const useStore = create<Store>((set) => ({
  token: false,
  isLoading: false,
  signIn: () => {
    set({ token: true });
    localStorage.setItem("token", JSON.stringify(true));
  },
  signOut: () => {
    set({ token: false });
    localStorage.removeItem("token");
  },
  setIsLoading: (value: boolean) => set({ isLoading: value })
}));

export default useStore;
