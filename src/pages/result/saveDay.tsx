import { create } from 'zustand';
import Day from '../../types/DayType';

export const useSaveDay = create<Day>((set) => ({
    day: "",
    setDay: (newDay: string) => set({ day: newDay })
}));