import { create } from 'zustand';

export const useUserStore = create((set) => ({
    addUser: (user) => {
        set({ ...user })
    }
}));