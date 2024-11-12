import { create } from 'zustand'

export type User = {
  name: string;
  weight: string;
  age: string;
  height: string;
  level: string;
  objective: string;
  gender: string;
  exercises: Exercise[];
  supplements: SupplementTip[];
}

export type Exercise = {
  day: string; // Exemplo: "Segunda-feira"
  activities: string[]; // Exemplo: ["Exercício 1", "Exercício 2"]
}

export type SupplementTip = {
  supplement: string;
  tip: string;
}

type DataState = {
  user: User;
  setPageOne: (data: Omit<User, "gender" | "objective" | "level" | "exercises" | "supplements">) => void;
  setPageTwo: (data: Pick<User, "gender" | "objective" | "level">) => void;
  setExercisesAndSupplements: (exercises: Exercise[], supplements: SupplementTip[]) => void;
}

export const useDataStore = create<DataState>((set) => ({
  user: {
    name: "",
    age: "",
    level: "",
    objective: "",
    gender: "",
    height: "",
    weight: "",
    exercises: [],
    supplements: []
  },
  setPageOne: (data) => set((state) => ({ user: { ...state.user, ...data } })),
  setPageTwo: (data) => set((state) => ({ user: { ...state.user, ...data } })),
  setExercisesAndSupplements: (exercises, supplements) => set((state) => ({
    user: { ...state.user, exercises, supplements }
  })),
}));
