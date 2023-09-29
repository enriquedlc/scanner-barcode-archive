import axios from "axios";

import { LoginUserForm, PrettifiedRegisterUserForm, User } from "../store/user-auth";

import { AXIOS_BASE_URL } from "../../credentials";

interface LoginResponse {
    message: string;
    login: boolean;
    user: User;
}

export const loginUser = async (user: LoginUserForm) => {
    try {
        const response = await axios.post<LoginResponse>(
            `${AXIOS_BASE_URL}/users/login/`,
            user,
        );
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

interface RegisterResponse {
    message: string;
    created: boolean;
    user: User;
}

export const registerUser = async (user: PrettifiedRegisterUserForm) => {
    try {
        const response = await axios.post<RegisterResponse>(
            `${AXIOS_BASE_URL}/users/`,
            user
        );
        return response.data;
    } catch (error) {
        console.error(error)
    }
}