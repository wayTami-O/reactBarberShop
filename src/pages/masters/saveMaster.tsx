import { create } from 'zustand';
import MasterSuz from '../../types/MasterZustandType';
import MasterSmall from '../../types/MasterSmall';

export const useSaveMaster = create<MasterSuz>((set) => ({
    masterName: '',
    masterId: '',
    setMaster: (newMaster: MasterSmall) => set({masterId: newMaster.id, masterName: newMaster.name})
}))