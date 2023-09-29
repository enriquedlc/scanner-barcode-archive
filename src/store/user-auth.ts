import { create } from 'zustand';

import { loginUser, registerUser } from '../services/user';
import { clearStorage, setUserToStorage } from '../utils/async-storage';

import { Prettify } from '../types/types';

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
type RegisterUserForm = Pick<User, 'username' | 'password' | 'email'> & { confirmPassword: string }
export type PrettifiedRegisterUserForm = Prettify<RegisterUserForm>

interface State {
    user: User | null;
}

interface Actions {
    setUser: (user: User) => void;
    getUser: () => User | null;
    login: (user: LoginUserForm) => ReturnType<typeof loginUser>;
    registerUser: (user: PrettifiedRegisterUserForm) => ReturnType<typeof registerUser>;
    logout: () => void;
}

export const useUserAuthStore = create<State & Actions>(
    (set, get) => ({
        user: null,

        setUser: (user) => set({ user }),

        getUser: () => get().user,

        login: async (user) => {

            // TODO: refactor this 
            const response = await loginUser(user);

            if (response?.login) {
                console.log("response?.user", response?.user)
                setUserToStorage(response?.user);
                set({ user: response?.user });
            }

            return response;
        },

        registerUser: async (user) => {
            // TODO: refactor this 
            const response = await registerUser(user);

            if (response?.created) {
                setUserToStorage(response?.user);
                set({ user: response?.user });
            }

            return response;
        },

        logout: () => {
            set({ user: null });
            clearStorage();
        },
    }),
)
