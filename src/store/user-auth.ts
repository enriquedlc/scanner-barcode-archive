import { create } from 'zustand';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export type User = {
    username: string;
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

export const useUserAuthStore = create<State & Actions>(
    (set, get) => ({
        user: null,

        setUser: (user) => set({ user }),

        getUser: () => get().user,

        login: async (user) => {

            // Simulate a login request
            await sleep(2000);

            // Set the user
            set({ user });
        },

        logout: () => set({ user: null }),
    }),
)
