import { create } from 'zustand';
import MasterSuz from '../../types/MasterZustandType';

export const useSaveMaster = create<MasterSuz>((set) => ({
    masterId: '',
    setMaster: (newMaster: string) => set({masterId: newMaster})
}))