import {
  StyleProp,
  Text,
  TextInput,
  View,
  ViewStyle,
  ScrollView,
} from "react-native";

import { SignUpInputFocus } from "../../screens/signup-screen";
import { ButtonLanding } from "../button-landing/button-landing";

import { useAppNavigation } from "../../hooks/useAppNavigation";
import { useInputFocus } from "../login/useLoginInput";

import {
  IS_FOCUSED_BORDER_INPUT_COLOR,
  IS_NOT_FOCUSED_BORDER_INPUT_COLOR,
} from "../../constants/colors/colors";

import { signUpStyles } from "./signup-styles";

type SignUpProps = {
  formTitle: string;
};

const INITIAL_SIGNUP_FOCUS: SignUpInputFocus = {
  email: false,
  username: false,
  password: false,
  confirmPassword: false,
};

export function SignUp(props: SignUpProps) {
  const { formTitle } = props;

  const { navigation } = useAppNavigation();

  const { handleInputFocus, isFocused } =
    useInputFocus<SignUpInputFocus>(INITIAL_SIGNUP_FOCUS);

  const inputStyles: StyleProp<ViewStyle> = {
    borderBottomColor: isFocused
      ? IS_FOCUSED_BORDER_INPUT_COLOR
      : IS_NOT_FOCUSED_BORDER_INPUT_COLOR,
    borderBottomWidth: 1,
  };

  console.log("isFocused", isFocused);

  return (
    <View style={signUpStyles.signUpContainer}>
      <Text style={signUpStyles.formTitle}>{formTitle}</Text>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 15,
            minWidth: "100%",
          }}
        >
          <View style={signUpStyles.inputContainer}>
            <Text style={signUpStyles.inputLabel}>Correo electrónico</Text>
            <TextInput
              placeholderTextColor={"lightgray"}
              style={[signUpStyles.input, isFocused.email && inputStyles]}
              placeholder="Correo electrónico"
              onFocus={() => handleInputFocus("email", true)}
              onBlur={() => handleInputFocus("email", false)}
            />
          </View>
          <View style={signUpStyles.inputContainer}>
            <Text style={signUpStyles.inputLabel}>Nombre de usuario</Text>
            <TextInput
              placeholderTextColor={"lightgray"}
              style={[signUpStyles.input, isFocused.username && inputStyles]}
              placeholder="Nombre de usuario"
              onFocus={() => handleInputFocus("username", true)}
              onBlur={() => handleInputFocus("username", false)}
            />
          </View>
          <View style={signUpStyles.inputContainer}>
            <Text style={signUpStyles.inputLabel}>Contraseña</Text>
            <TextInput
              placeholderTextColor={"lightgray"}
              style={[signUpStyles.input, isFocused.password && inputStyles]}
              placeholder="Contraseña"
              onFocus={() => handleInputFocus("password", true)}
              onBlur={() => handleInputFocus("password", false)}
            />
          </View>
          <View style={signUpStyles.inputContainer}>
            <Text style={signUpStyles.inputLabel}>Confirmar contraseña</Text>
            <TextInput
              placeholderTextColor={"lightgray"}
              style={[
                signUpStyles.input,
                isFocused.confirmPassword && inputStyles,
              ]}
              placeholder="Confirmar contraseña"
              onFocus={() => handleInputFocus("confirmPassword", true)}
              onBlur={() => handleInputFocus("confirmPassword", false)}
            />
          </View>
          <ButtonLanding
            title="Iniciar sesión"
            onPress={() => console.log("signup action")}
          />
          <ButtonLanding
            title="Atrás"
            onPress={() => navigation.navigate("LANDING_SCREEN")}
            width={120}
            outLined={true}
          />
        </View>
      </ScrollView>
    </View>
  );
}
