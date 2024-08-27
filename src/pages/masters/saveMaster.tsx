import { create } from 'zustand';
import MasterSuz from '../../types/MasterZustandType';

export const useSaveMaster = create<MasterSuz>((set) => ({
    masterName: '',
    masterId: '',
    setMaster: (newMaster: string, newMasterName: string) => set({masterId: newMaster, masterName: newMasterName})
}))