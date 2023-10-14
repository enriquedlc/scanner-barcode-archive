import { useState } from "react";
import { Text, TextInput } from "react-native";

import { User, useUserAuthStore } from "../../../../store/user-auth";
import { UpdateUserInfoButton } from "../update-user-info-button";

import { useShowToast } from "../../../../hooks/useShowToast";
import { changeUsername } from "../../../../services/user";
import { changeUserInfoStyles } from "./styles/change-user-info-styles";

export function ChangeUsernameInput() {
	const { user, setUser } = useUserAuthStore((state) => state);
	const { showToast } = useShowToast();

	const [username, setUsername] = useState(user?.username as unknown as string);

	const handleUsernameChange = (text: string) => {
		setUsername(text);
	};

	const updateUserName = async () => {
		const response = await changeUsername(username, user?.id as User["id"]);
		if (response?.updated) {
			setUser({ ...(response.user as User), password: user?.password as string });
			showToast("success", "Username updated successfully 👍", "");
		}
	};

	return (
		<>
			<Text style={changeUserInfoStyles.infoToChangeLabel}>Username</Text>
			<TextInput
				style={changeUserInfoStyles.infoToChangeInput}
				placeholder={user?.username as unknown as string}
				onChangeText={handleUsernameChange}
				value={username}
			/>
			<UpdateUserInfoButton action={updateUserName} />
		</>
	);
}
