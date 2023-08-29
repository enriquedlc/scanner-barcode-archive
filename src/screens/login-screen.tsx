import { useState } from "react";

import { LoginLayout } from "../layout/login-layout";
import { Login } from "../components/login/login";

const INITIAL_LOGIN_INPUT_FOCUS_STATE: LoginInputFocus = {
  username: false,
  password: false,
};

export type LoginInputFocus = {
  username: boolean;
  password: boolean;
};

export function LoginScreen() {
  const [isFocused, setIsFocused] = useState<LoginInputFocus>(
    INITIAL_LOGIN_INPUT_FOCUS_STATE
  );

  // const handleLogin = () => {
  //   console.log("login action");
  // };

  return (
    <LoginLayout
      firstBubbleButtomY={-160}
      secondBubbleButtomY={-130}
      thirdBubbleButtomY={-100}
      children={
        <Login
          formTitle="Iniciar sesión"
          isFocused={isFocused}
          setIsFocused={setIsFocused}
        />
      }
    />
  );
}
