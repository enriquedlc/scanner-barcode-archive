import { useState } from "react";
import { Text, TextInput } from "react-native";

import { useShowToast } from "../../../../hooks/useShowToast";
import { changeUserEmail } from "../../../../services/user";
import { User, useUserAuthStore } from "../../../../store/user-auth";
import { UpdateUserInfoButton } from "../update-user-info-button";

import { useUserPreferencesStore } from "../../../../store/user-preferences";
import { changeUserInfoStyles } from "./styles/change-user-info-styles";

export function ChangeEmailInput() {
	const { user, setUser } = useUserAuthStore((state) => state);
	const { showToast } = useShowToast();
	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	const [email, setEmail] = useState(user?.email as unknown as string);

	const handleEmailChange = (text: string) => {
		setEmail(text);
	};

	const updateEmail = async () => {
		const response = await changeUserEmail(email, user?.id as User["id"]);
		if (response?.updated) {
			setUser({ ...(response.user as User), password: user?.password as string });
			showToast("success", "Email updated successfully 👍", "");
		}
	};

	return (
		<>
			<Text
				style={[
					changeUserInfoStyles.infoToChangeLabel,
					{
						color: colorScheme.PRIMARY_BLACK,
					},
				]}
			>
				Email
			</Text>
			<TextInput
				style={[
					changeUserInfoStyles.infoToChangeInput,
					{
						color: colorScheme.SECONDARY_BLACK,
						backgroundColor: colorScheme.SECONDARY_WHITE,
					},
				]}
				placeholder={user?.email as unknown as string}
				onChangeText={handleEmailChange}
				value={email}
			/>
			<UpdateUserInfoButton action={updateEmail} />
		</>
	);
}
