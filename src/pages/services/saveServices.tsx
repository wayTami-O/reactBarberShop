import { create } from 'zustand';
import ServicesZus, { ServicesInfo } from '../../types/ServicesZustandType';

export const useSaveServices = create<ServicesZus>((set) => ({
    arrayServices: [],
    setArrayServices: (newServices: ServicesInfo[]) => set({ arrayServices: newServices })
}));