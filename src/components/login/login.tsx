import { useState } from "react";
import { StyleProp, Text, TextInput, View, ViewStyle } from "react-native";
import Toast from "react-native-toast-message";

import { ButtonLanding } from "../button-landing/button-landing";

import { useAppNavigation } from "../../hooks/useAppNavigation";
import { useInputFocus } from "../../hooks/useLoginInput";
import { User, useUserAuthStore } from "../../store/user-auth";

import { LoginInputFocus } from "../../screens/login-screen";
import {
  IS_FOCUSED_BORDER_INPUT_COLOR,
  IS_NOT_FOCUSED_BORDER_INPUT_COLOR,
} from "../../constants/colors/colors";

import { loginStyles } from "./login-styles";
import { LoadingLandingModal } from "../modal/loading-landing-modal/loading-landing-modal";

type LoginProps = {
  formTitle: string;
};

const INITIAL_LOGIN_FOCUS: LoginInputFocus = {
  username: false,
  password: false,
};

type ToastType = "success" | "error" | "info";

export function Login(props: LoginProps) {
  const { formTitle } = props;

  const { navigation } = useAppNavigation();

  const { handleInputFocus, isFocused } =
    useInputFocus<LoginInputFocus>(INITIAL_LOGIN_FOCUS);

  const login = useUserAuthStore((state) => state.login);

  const [userLoginForm, setUserLoginForm] = useState<User>({
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

  const showToast = (type: ToastType, title: string, message: string) => {
    Toast.show({
      type,
      position: "top",
      text1: title,
      text2: message,
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 60,
    });
  };

  const handleChangeText = (text: string, input: keyof LoginInputFocus) => {
    setUserLoginForm({ ...userLoginForm, [input]: text });
    console.log("user login", userLoginForm);
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (
      userLoginForm.username === "test" &&
      userLoginForm.password === "test"
    ) {
      await login(userLoginForm);
      setLoading(false);
      showToast("success", "Inicio de sesión exitoso", "Bienvenido! 🎉");
      // navigation.navigate("HOME_SCREEN");
    }
    showToast(
      "error",
      "Inicio de sesión fallido",
      "Usuario o contraseña incorrectos ❌"
    );
    setLoading(false);
  };

  return (
    <View style={loginStyles.loginContainer}>
      <LoadingLandingModal
        modalVisible={loading}
        setModalVisible={setLoading}
        modalText="Iniciando sesión..."
      />
      <Text style={loginStyles.formTitle}>{formTitle}</Text>
      <View style={loginStyles.inputContainer}>
        <Text style={loginStyles.inputLabel}>Usuario</Text>
        <TextInput
          placeholderTextColor={"lightgray"}
          style={[loginStyles.input, isFocused.username && inputStyles]}
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
    </View>
  );
}
