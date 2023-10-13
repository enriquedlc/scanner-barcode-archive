import { Text, TextInput } from "react-native";

import { UpdateUserInfoButton } from "../update-user-info-button";

import { changeUserInfoStyles } from "./styles/change-user-info-styles";

export function ChangePasswordInput() {
	return (
		<>
			<Text style={changeUserInfoStyles.infoToChangeLabel}>New password</Text>
			<TextInput style={changeUserInfoStyles.infoToChangeInput} />
			<Text style={changeUserInfoStyles.infoToChangeLabel}>Confirm new password</Text>
			<TextInput style={changeUserInfoStyles.infoToChangeInput} />
			<UpdateUserInfoButton />
		</>
	);
}
