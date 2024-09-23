import { create } from "zustand";
import { IUser } from "../interface/IUser";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthState = {
  user: IUser | null;
  login: (user: IUser | null) => void;
  logout: () => void;
};

export const useAuth = create(
  persist<AuthState>(
    (set) => ({
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
      user: null,
    }),
    {
      name: "user-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
