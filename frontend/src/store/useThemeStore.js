import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("wireframe") || "wireframe",
  setTheme: (theme) => {
    localStorage.setItem("wireframe", theme);
    set({ theme });
  },
}));
