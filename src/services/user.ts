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
		const response = await axios.post<LoginResponse>(`${AXIOS_BASE_URL}/users/login/`, user);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

interface RegisterResponse {
	message: string;
	created: boolean;
	user: User;
}

export const registerUser = async (user: PrettifiedRegisterUserForm) => {
	try {
		const response = await axios.post<RegisterResponse>(`${AXIOS_BASE_URL}/users/`, user);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

interface ChangeSpecificUserFieldResponse {
	message: string;
	updated: boolean;
	user: User;
}

export const changeUsername = async (userName: User["username"], userId: User["id"]) => {
	try {
		const response = await axios.patch<ChangeSpecificUserFieldResponse>(
			`${AXIOS_BASE_URL}/users/username/${userId}`,
			{
				username: userName,
			},
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const changeUserEmail = async (email: User["email"], userId: User["id"]) => {
	try {
		const response = await axios.patch<ChangeSpecificUserFieldResponse>(
			`${AXIOS_BASE_URL}/users/email/${userId}`,
			{
				email,
			},
		);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
