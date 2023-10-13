import { Text, TextInput } from "react-native";
import { useUserAuthStore } from "../../../../store/user-auth";
import { changeUserInfoStyles } from "./styles/change-user-info-styles";

export function ChangeUsernameInput() {
	const user = useUserAuthStore((state) => state.user);
	return (
		<>
			<Text style={changeUserInfoStyles.infoToChangeLabel}>Username</Text>
			<TextInput
				style={changeUserInfoStyles.infoToChangeInput}
				placeholder={user?.username as unknown as string}
			/>
		</>
	);
}
