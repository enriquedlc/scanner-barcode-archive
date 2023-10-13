import { Text, TextInput } from "react-native";

import { UpdateUserInfoButton } from "../update-user-info-button";

import { useState } from "react";
import { useShowToast } from "../../../../hooks/useShowToast";
import { changePassword } from "../../../../services/user";
import { User, useUserAuthStore } from "../../../../store/user-auth";
import { changeUserInfoStyles } from "./styles/change-user-info-styles";

export function ChangePasswordInput() {
	const { user, setUser } = useUserAuthStore((state) => state);
	const { showToast } = useShowToast();

	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handlePasswordChange = (password: string) => {
		setPassword(password);
	};

	const updatePassword = async () => {
		if (password.length < 8 || confirmPassword.length < 8) {
			showToast("error", "Password must be at least 8 characters long 😕", "");
			return;
		}
		if (password !== confirmPassword) {
			showToast("error", "Passwords don't match 😕", "");
			return;
		}
		const response = await changePassword(password, user?.id as User["id"]);
		if (response?.updated) {
			setUser({ ...(response.user as User) });
			showToast("success", "Password updated successfully 👍", "");
		}
	};

	return (
		<>
			<Text style={changeUserInfoStyles.infoToChangeLabel}>New password</Text>
			<TextInput
				style={changeUserInfoStyles.infoToChangeInput}
				onChangeText={handlePasswordChange}
				value={password}
			/>
			<Text style={changeUserInfoStyles.infoToChangeLabel}>Confirm new password</Text>
			<TextInput
				style={changeUserInfoStyles.infoToChangeInput}
				onChangeText={setConfirmPassword}
				value={confirmPassword}
			/>
			<UpdateUserInfoButton action={updatePassword} />
		</>
	);
}
