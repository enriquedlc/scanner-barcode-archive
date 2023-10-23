import { useState } from "react";
import { Keyboard, StyleProp, Text, TextInput, View, ViewStyle } from "react-native";

import { LoginInputFocus } from "../../screens/login-screen";
import { ButtonLanding } from "../button-landing/button-landing";
import { LoadingLandingModal } from "../modal/loading-landing-modal/loading-landing-modal";

import { useAppNavigation } from "../../hooks/useAppNavigation";
import { useInputFocus } from "../../hooks/useLoginInput";
import { useShowToast } from "../../hooks/useShowToast";
import { LoginUserForm, useUserAuthStore } from "../../store/user-auth";

import {
	IS_FOCUSED_BORDER_INPUT_COLOR,
	IS_NOT_FOCUSED_BORDER_INPUT_COLOR,
} from "../../constants/colors/colors";

import { useUserPreferencesStore } from "../../store/user-preferences";
import { loginStyles } from "./login-styles";

type LoginProps = {
	formTitle: string;
};

const INITIAL_LOGIN_FOCUS: LoginInputFocus = {
	username: false,
	password: false,
};

export function Login(props: LoginProps) {
	const { formTitle } = props;

	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	const { navigation } = useAppNavigation();
	const { showToast } = useShowToast();

	const { handleInputFocus, isFocused } = useInputFocus<LoginInputFocus>(INITIAL_LOGIN_FOCUS);

	const login = useUserAuthStore((state) => state.login);

	const [userLoginForm, setUserLoginForm] = useState<LoginUserForm>({
		username: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);

	const inputStyles: StyleProp<ViewStyle> = {
		borderBottomColor: isFocused
			? IS_FOCUSED_BORDER_INPUT_COLOR
			: IS_NOT_FOCUSED_BORDER_INPUT_COLOR,
		borderBottomWidth: 1,
	};

	const handleChangeText = (text: string, input: keyof LoginInputFocus) => {
		setUserLoginForm({ ...userLoginForm, [input]: text });
	};

	const handleSubmit = async () => {
		try {
			setLoading(true);

			const response = await login(userLoginForm);

			if (response?.login) {
				setLoading(false);
				showToast("success", "Inicio de sesión exitoso", "Bienvenido! 🎉");
				navigation.navigate("HOME_SCREEN");
				return;
			}

			showToast("error", "Inicio de sesión fallido", "Usuario o contraseña incorrectos ❌");
			setLoading(false);
			Keyboard.dismiss();
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={[loginStyles.loginContainer]}>
			<LoadingLandingModal
				modalVisible={loading}
				setModalVisible={setLoading}
				modalText="Iniciando sesión..."
			/>
			<Text style={[loginStyles.formTitle, { backgroundColor: colorScheme.PRIMARY_WHITE }]}>
				{formTitle}
			</Text>
			<View style={loginStyles.inputContainer}>
				<Text
					style={[loginStyles.inputLabel, { backgroundColor: colorScheme.PRIMARY_WHITE }]}
				>
					Usuario
				</Text>
				<TextInput
					placeholderTextColor={"lightgray"}
					style={[
						loginStyles.input,
						isFocused.username && inputStyles,
						{
							color: colorScheme.SECONDARY_WHITE,
							backgroundColor: colorScheme.SECONDARY,
						},
					]}
					placeholder="Usuario"
					onFocus={() => handleInputFocus("username", true)}
					onBlur={() => handleInputFocus("username", false)}
					onChange={(e) => handleChangeText(e.nativeEvent.text, "username")}
				/>
			</View>
			<View style={loginStyles.inputContainer}>
				<Text style={loginStyles.inputLabel}>Contraseña</Text>
				<TextInput
					placeholderTextColor={"lightgray"}
					style={[loginStyles.input, isFocused.password && inputStyles]}
					placeholder="Contraseña"
					onFocus={() => handleInputFocus("password", true)}
					onBlur={() => handleInputFocus("password", false)}
					onChange={(e) => handleChangeText(e.nativeEvent.text, "password")}
				/>
			</View>
			<ButtonLanding title="Iniciar sesión" onPress={handleSubmit} />
			<ButtonLanding
				title="Atrás"
				onPress={() => navigation.navigate("LANDING_SCREEN")}
				width={120}
				outLined={true}
			/>
			{/* TODO: recover password */}
		</View>
	);
}
