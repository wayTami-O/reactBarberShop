import { create } from "zustand";
import Time from '../types/TimeZus';

export const useTime = create<Time>((set) => ({
    time: "",
    setTime: (newTime: string) => set({time: newTime})
}))