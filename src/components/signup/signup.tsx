import { useState } from "react";
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
import { LoadingLandingModal } from "../modal/loading-landing-modal/loading-landing-modal";

import { useAppNavigation } from "../../hooks/useAppNavigation";
import { useInputFocus } from "../../hooks/useLoginInput";
import { useShowToast } from "../../hooks/useShowToast";

import {
  IS_FOCUSED_BORDER_INPUT_COLOR,
  IS_NOT_FOCUSED_BORDER_INPUT_COLOR,
} from "../../constants/colors/colors";

import {
  PrettifiedRegisterUserForm,
  useUserAuthStore,
} from "../../store/user-auth";

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
  const { showToast } = useShowToast();

  const { handleInputFocus, isFocused } =
    useInputFocus<SignUpInputFocus>(INITIAL_SIGNUP_FOCUS);

  const registerUser = useUserAuthStore((state) => state.registerUser);

  const [registerUserForm, setRegisterUserForm] =
    useState<PrettifiedRegisterUserForm>({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  const [loading, setLoading] = useState(false);

  const inputStyles: StyleProp<ViewStyle> = {
    borderBottomColor: isFocused
      ? IS_FOCUSED_BORDER_INPUT_COLOR
      : IS_NOT_FOCUSED_BORDER_INPUT_COLOR,
    borderBottomWidth: 1,
  };

  const handleChangeText = (
    text: string,
    input: keyof PrettifiedRegisterUserForm
  ) => {
    setRegisterUserForm({ ...registerUserForm, [input]: text });
  };

  const handleSignIn = async () => {
    setLoading(true);

    const response = await registerUser(registerUserForm);

    if (response?.created) {
      setLoading(false);
      showToast("success", "Cuenta creada exitosamente", "Bienvenido! 🎉");
      navigation.navigate("HOME_SCREEN");
      return;
    }

    showToast("error", "Error al crear la cuenta", "Inténtalo de nuevo 😢");
    setLoading(false);
  };

  return (
    <View style={signUpStyles.signUpContainer}>
      <LoadingLandingModal
        modalVisible={loading}
        setModalVisible={setLoading}
        modalText="Iniciando sesión..."
      />
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
              onChange={(e) => handleChangeText(e.nativeEvent.text, "email")}
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
              onChange={(e) => handleChangeText(e.nativeEvent.text, "username")}
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
              onChange={(e) => handleChangeText(e.nativeEvent.text, "password")}
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
              onChange={(e) =>
                handleChangeText(e.nativeEvent.text, "confirmPassword")
              }
            />
          </View>
          <ButtonLanding title="Crear cuenta" onPress={handleSignIn} />
          <ButtonLanding
            title="Atrás"
            width={120}
            outLined={true}
            onPress={() => navigation.navigate("LANDING_SCREEN")}
          />
        </View>
      </ScrollView>
    </View>
  );
}
