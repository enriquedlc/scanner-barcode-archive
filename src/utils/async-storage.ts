import AsyncStorage from "@react-native-async-storage/async-storage";

import { User } from "../store/user-auth";

export const getUserFromStorage = async (): Promise<User | null> => {
	try {
		const userString = await AsyncStorage.getItem("user");
		const user: User = userString ? JSON.parse(userString) : null;
		return user ? (user as User) : null;
	} catch (error) {
		console.error("Error getting user from storage", error);
		return null;
	}
};

export const setUserToStorage = async (user: User) => {
	try {
		console.log("user", user);
		await AsyncStorage.setItem("user", JSON.stringify(user as unknown as string));
	} catch (error) {
		console.error("Error setting user to storage", error);
	}
};

export const clearStorage = async () => {
	try {
		AsyncStorage.clear();
	} catch (error) {
		console.error("Error clearing storage", error);
	}
};
