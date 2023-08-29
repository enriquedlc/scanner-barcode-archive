import { StyleProp, Text, TextInput, View, ViewStyle } from "react-native";

import { useAppNavigation } from "../../hooks/useAppNavigation";
import {
  IS_FOCUSED_BORDER_INPUT_COLOR,
  IS_NOT_FOCUSED_BORDER_INPUT_COLOR,
} from "../../constants/colors";
import { ButtonLanding } from "../button-landing/button-landing";
import { SignUpInputFocus } from "../../screens/signup-screen";

import { signUpStyles } from "./signup-styles";

type SignUpProps = {
  isFocused: SignUpInputFocus;
  setIsFocused: (focused: SignUpInputFocus) => void;
};

export function SignUp(props: SignUpProps) {
  const { isFocused, setIsFocused } = props;

  const { navigation } = useAppNavigation();

  const handleInputFocus = (input: keyof SignUpInputFocus) => {
    if (input === "username") {
      setIsFocused({ ...isFocused, username: true });
    }
    if (input === "password") {
      setIsFocused({ ...isFocused, password: true });
    }
  };

  const handleInputBlur = (input: keyof SignUpInputFocus) => {
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
    <View style={signUpStyles.loginContainer}>
      <View style={signUpStyles.inputContainer}>
        <Text style={signUpStyles.inputLabel}>Correo electrónico</Text>
        <TextInput
          placeholderTextColor={"lightgray"}
          style={[signUpStyles.input, isFocused.username && inputStyles]}
          placeholder="Usuario"
          onFocus={() => handleInputFocus("username")}
          onBlur={() => handleInputBlur("username")}
        />
      </View>
      <View style={signUpStyles.inputContainer}>
        <Text style={signUpStyles.inputLabel}>Correo electrónico</Text>
        <TextInput
          placeholderTextColor={"lightgray"}
          style={[signUpStyles.input, isFocused.password && inputStyles]}
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
