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
  formTitle: string;
  isFocused: SignUpInputFocus;
  setIsFocused: (focused: SignUpInputFocus) => void;
};

export function SignUp(props: SignUpProps) {
  const { formTitle, isFocused, setIsFocused } = props;

  const { navigation } = useAppNavigation();

  const handleInputFocus = (input: keyof SignUpInputFocus) => {
    if (input === "username") setIsFocused({ ...isFocused, username: true });
    if (input === "password") setIsFocused({ ...isFocused, password: true });
    if (input === "confirmPassword")
      setIsFocused({ ...isFocused, confirmPassword: true });
    if (input === "email") setIsFocused({ ...isFocused, email: true });
  };

  const handleInputBlur = (input: keyof SignUpInputFocus) => {
    console.log("blur", isFocused);
    if (input === "username") setIsFocused({ ...isFocused, username: false });
    if (input === "password") setIsFocused({ ...isFocused, password: false });
    if (input === "confirmPassword")
      setIsFocused({ ...isFocused, confirmPassword: false });
    if (input === "email") setIsFocused({ ...isFocused, email: false });
  };

  const inputStyles: StyleProp<ViewStyle> = {
    borderBottomColor: isFocused
      ? IS_FOCUSED_BORDER_INPUT_COLOR
      : IS_NOT_FOCUSED_BORDER_INPUT_COLOR,
    borderBottomWidth: 1,
  };

  return (
    <View style={signUpStyles.signUpContainer}>
      <Text style={signUpStyles.formTitle}>{formTitle}</Text>
      <View style={signUpStyles.inputContainer}>
        <Text style={signUpStyles.inputLabel}>Correo electrónico</Text>
        <TextInput
          placeholderTextColor={"lightgray"}
          style={[signUpStyles.input, isFocused.email && inputStyles]}
          placeholder="Correo electrónico"
          onFocus={() => handleInputFocus("email")}
          onBlur={() => handleInputBlur("email")}
        />
      </View>
      <View style={signUpStyles.inputContainer}>
        <Text style={signUpStyles.inputLabel}>Nombre de usuario</Text>
        <TextInput
          placeholderTextColor={"lightgray"}
          style={[signUpStyles.input, isFocused.username && inputStyles]}
          placeholder="Nombre de usuario"
          onFocus={() => handleInputFocus("username")}
          onBlur={() => handleInputBlur("username")}
        />
      </View>
      <View style={signUpStyles.inputContainer}>
        <Text style={signUpStyles.inputLabel}>Contraseña</Text>
        <TextInput
          placeholderTextColor={"lightgray"}
          style={[signUpStyles.input, isFocused.password && inputStyles]}
          placeholder="Contraseña"
          onFocus={() => handleInputFocus("password")}
          onBlur={() => handleInputBlur("password")}
        />
      </View>
      <View style={signUpStyles.inputContainer}>
        <Text style={signUpStyles.inputLabel}>Confirmar contraseña</Text>
        <TextInput
          placeholderTextColor={"lightgray"}
          style={[signUpStyles.input, isFocused.confirmPassword && inputStyles]}
          placeholder="Confirmar contraseña"
          onFocus={() => handleInputFocus("confirmPassword")}
          onBlur={() => handleInputBlur("confirmPassword")}
        />
      </View>
      <ButtonLanding
        title="Iniciar sesión"
        onPress={() => console.log("signup action")}
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
