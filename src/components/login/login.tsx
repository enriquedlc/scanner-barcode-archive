import { StyleProp, Text, TextInput, View, ViewStyle } from "react-native";

import { useAppNavigation } from "../../hooks/useAppNavigation";

import { ButtonLanding } from "../button-landing/button-landing";
import { LoginInputFocus } from "../../screens/login-screen";
import {
  IS_FOCUSED_BORDER_INPUT_COLOR,
  IS_NOT_FOCUSED_BORDER_INPUT_COLOR,
} from "../../constants/colors";

import { loginStyles } from "./login-styles";

type LoginProps = {
  isFocused: LoginInputFocus;
  setIsFocused: (focused: LoginInputFocus) => void;
};

export function Login(props: LoginProps) {
  const { isFocused, setIsFocused } = props;

  const { navigation } = useAppNavigation();

  const handleInputFocus = (input: keyof LoginInputFocus) => {
    if (input === "username") {
      setIsFocused({ ...isFocused, username: true });
    }
    if (input === "password") {
      setIsFocused({ ...isFocused, password: true });
    }
  };

  const handleInputBlur = (input: keyof LoginInputFocus) => {
    if (input === "username") {
      setIsFocused({ ...isFocused, username: false });
    }
    if (input === "password") {
      setIsFocused({ ...isFocused, password: false });
    }
  };

  const inputStyles: StyleProp<ViewStyle> = {
    borderBottomColor: isFocused
      ? IS_FOCUSED_BORDER_INPUT_COLOR
      : IS_NOT_FOCUSED_BORDER_INPUT_COLOR,
    borderBottomWidth: 1,
  };

  return (
    <View style={loginStyles.loginContainer}>
      <View style={loginStyles.inputContainer}>
        <Text style={loginStyles.inputLabel}>Correo electrónico</Text>
        <TextInput
          placeholderTextColor={"lightgray"}
          style={[loginStyles.input, isFocused.username && inputStyles]}
          placeholder="Usuario"
          onFocus={() => handleInputFocus("username")}
          onBlur={() => handleInputBlur("username")}
        />
      </View>
      <View style={loginStyles.inputContainer}>
        <Text style={loginStyles.inputLabel}>Correo electrónico</Text>
        <TextInput
          placeholderTextColor={"lightgray"}
          style={[loginStyles.input, isFocused.password && inputStyles]}
          placeholder="Usuario"
          onFocus={() => handleInputFocus("password")}
          onBlur={() => handleInputBlur("password")}
        />
      </View>
      <ButtonLanding
        title="Iniciar sesión"
        onPress={() => console.log("login action")}
      />
      <ButtonLanding
        title="Atrás"
        onPress={() => navigation.navigate("LANDING")}
        width={120}
        outLined={true}
      />
    </View>
  );
}
