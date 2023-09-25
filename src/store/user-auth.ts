import { create } from 'zustand';

import { loginUser } from '../services/user';
import { setUserToStorage } from '../utils/async-storage';

type UserId = `${string}-${string}-${string}-${string}-${string}`

export interface User {
    id: UserId;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
}

export type LoginUserForm = Pick<User, 'username' | 'password'>

interface State {
    user: User | null;
}

interface Actions {
    setUser: (user: User) => void;
    getUser: () => User | null;
    login: (user: LoginUserForm) => ReturnType<typeof loginUser>;
    logout: () => void;
}

export const useUserAuthStore = create<State & Actions>(
    (set, get) => ({
        user: null,

        setUser: (user) => set({ user }),

        getUser: () => get().user,

        login: async (user) => {

            const response = await loginUser(user);

            if (response?.login) {
                setUserToStorage(response?.user);
                set({ user: response?.user });
            }

            return response;
        },

        logout: () => set({ user: null }),
    }),
)
