import { create } from 'zustand';
import MasterSuz from '../../types/MasterZustandType';
import MasterSmall from '../../types/MasterSmall';

export const useSaveMaster = create<MasterSuz>((set) => ({
    masterName: '',
    masterId: '',
    setMaster: (newMaster: string) => set({masterId: newMaster})
}))