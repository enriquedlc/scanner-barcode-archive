import { useState } from "react";
import { Text, TextInput } from "react-native";

import { useUserAuthStore } from "../../../../store/user-auth";
import { UpdateUserInfoButton } from "../update-user-info-button";

import { changeUserInfoStyles } from "./styles/change-user-info-styles";

export function ChangeUsernameInput() {
	const user = useUserAuthStore((state) => state.user);

	const [username, setUsername] = useState(user?.username as unknown as string);

	const handleUsernameChange = (text: string) => {
		setUsername(text);
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
			<UpdateUserInfoButton />
		</>
	);
}
