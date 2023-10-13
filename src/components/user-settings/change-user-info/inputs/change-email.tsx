import { Text, TextInput } from "react-native";

import { useUserAuthStore } from "../../../../store/user-auth";
import { UpdateUserInfoButton } from "../update-user-info-button";

import { changeUserInfoStyles } from "./styles/change-user-info-styles";

export function ChangeEmailInput() {
	const user = useUserAuthStore((state) => state.user);

	return (
		<>
			<Text style={changeUserInfoStyles.infoToChangeLabel}>Email</Text>
			<TextInput
				style={changeUserInfoStyles.infoToChangeInput}
				placeholder={user?.email as unknown as string}
			/>
			<UpdateUserInfoButton />
		</>
	);
}
