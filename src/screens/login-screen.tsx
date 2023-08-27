import { useState } from "react";
import {
  TextInput,
  StyleProp,
  ViewStyle,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import {
  IS_FOCUSED_BORDER_INPUT_COLOR,
  IS_NOT_FOCUSED_BORDER_INPUT_COLOR,
  LOGIN_COLORS,
  TEXT_COLOR,
} from "../constants/colors";
import { FONT_SIZES } from "../constants/font";
import { LoginLayout } from "../layout/login-layout";
import { ButtonLanding } from "../components/button-landing";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, RootStackParamName } from "../constants/routes";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const navigation =
    useNavigation<
      StackNavigationProp<RootStackParamList, RootStackParamName>
    >();

  const [isFocused, setIsFocused] = useState({
    username: false,
    password: false,
  });

  const handleInputFocus = (input: string) => {
    if (input === "username") {
      setIsFocused({ ...isFocused, username: true });
    }
    if (input === "password") {
      setIsFocused({ ...isFocused, password: true });
    }
  };

  const handleInputBlur = (input: string) => {
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
    <LoginLayout
      children={
        // TODO: extract to a component
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              onPress={() => console.log("login action")}
              width={120}
              outLined={true}
            />
          </View>
        </TouchableWithoutFeedback>
        // TODO: extract to a component
      }
    />
  );
}

const loginStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 100,
    gap: 25,
  },
  inputContainer: {
    borderColor: "black",
    minWidth: "65%",
  },
  inputLabel: {
    fontSize: FONT_SIZES.LARGE,
    color: TEXT_COLOR.PRIMARY_WHITE,
    fontWeight: "800",
    paddingBottom: 5,
  },
  input: {
    fontSize: FONT_SIZES.LARGE,
    color: TEXT_COLOR.SECONDARY_WHITE,
    backgroundColor: LOGIN_COLORS.LIGHT_BLUE_BACKGROUND,
    fontWeight: "500",
    paddingVertical: 7,
    borderRadius: 5,
    paddingLeft: 10,
  },
});
