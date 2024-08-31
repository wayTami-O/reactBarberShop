import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import PhoneNumber from '../types/Number';

export const usePhoneNumber = create<PhoneNumber>()(
    persist(
        (set) => ({
            phone: '',
            setPhone: (newPhone: string) => {
            set({ phone: newPhone });
            },
        }),
            {
            name: 'phone', 
            version: 1
            }
        )
);