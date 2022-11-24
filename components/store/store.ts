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

interface TransformState {
  transform: {
    startTime: number;
    transformPeriod: number;
    perform: boolean;
  };

  setStartTime: (time: number) => void;
  setTransformPeriod: (time: number) => void;
  clearTransform: () => void;
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

export const useTransformStore = create<TransformState>()(
  devtools(
    persist(
      (set) => ({
        transform: {
          startTime: 0,
          transformPeriod: 0,
          perform: false,
        },
        setStartTime: (time) =>
          set((state) => ({
            transform: {
              ...state.transform,
              startTime: time,
              perform: true,
            },
          })),
        setTransformPeriod: (time) =>
          set((state) => ({
            transform: {
              ...state.transform,
              transformPeriod: time,
              perform: true,
            },
          })),
        clearTransform: () =>
          set(() => ({
            transform: {
              startTime: 0,
              transformPeriod: 0,
              perform: false,
            },
          })),
      }),
      { name: 'transformStore' }
    )
  )
);
