import { create } from 'zustand'
import backgroundSanta from '../../public/assets/images/bg_santa.png'
import backgroundGrinch from '../../public/assets/images/bg_grinch.png'

export const useTheme = create((set) => ({
  theme: { id: 'santa', background: backgroundSanta },
  setTheme: (theme) =>
    set(() => ({
      theme: { id: theme, background: theme === 'santa' ? backgroundSanta : backgroundGrinch }
    }))
}))
