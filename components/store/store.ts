import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface NavState {
  pages: {
    access: boolean;
    documents: boolean;
    effects: boolean;
    home: boolean;
    testimonials: boolean;
    ufos: boolean;
  };

  setVisited: (page: string) => void;
  clearVisited: () => void;
}

export const useNavStore = create<NavState>()(
  devtools(
    persist(
      (set) => ({
        pages: {
          access: false,
          home: false,
          documents: false,
          effects: false,
          testimonials: false,
          ufos: false,
        },
        setVisited: (page) =>
          set((state) => ({
            pages: {
              ...state.pages,
              [page]: true,
            },
          })),
        clearVisited: () =>
          set(() => ({
            pages: {
              access: false,
              home: false,
              documents: false,
              effects: false,
              testimonials: false,
              ufos: false,
            },
          })),
      }),
      { name: 'navStore' }
    )
  )
);
