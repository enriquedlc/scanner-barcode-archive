import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type User = {
    email: string;
    password: string;
};

type State = {
    user: User | null;
};

type Actions = {
    setUser: (user: User) => void;
    getUser: () => User | null;
    login: (user: User) => Promise<void>;
    logout: () => void;
}

export const useUserAuthStore = create<State & Actions>()(
    persist((set, get) => ({
        user: null,

        setUser: (user) => set({ user }),

        getUser: () => get().user,

        login: async (user) => {

            // Simulate a login request
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Set the user
            set({ user });
        },

        logout: () => set({ user: null }),
    }), {
        name: 'user-auth-info',
    })
)
