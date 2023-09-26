import AsyncStorage from "@react-native-async-storage/async-storage";

import { User } from "../store/user-auth";

export const getUserFromStorage = async (): Promise<User | null> => {
    const user = await AsyncStorage.getItem("user");
    return user as unknown as User;
};

export const setUserToStorage = async (user: User) => {
    await AsyncStorage.setItem("user", JSON.stringify(user));
}

export const clearStorage = async () => {
    AsyncStorage.clear();
};