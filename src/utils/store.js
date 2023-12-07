import { create } from 'zustand'

export const useTheme = create((set) => ({
  theme: { id: 'santa' },
  setTheme: (theme) =>
    set(() => ({
      theme: { id: theme }
    }))
}))
