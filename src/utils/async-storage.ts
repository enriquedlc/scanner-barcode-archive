import AsyncStorage from "@react-native-async-storage/async-storage";

import { User } from "../store/user-auth";

export const getUserFromAsyncStorage = async (): Promise<User | null> => {
    const user = await AsyncStorage.getItem("user");
    return user as unknown as User;
};