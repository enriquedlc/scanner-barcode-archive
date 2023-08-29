import { useState } from "react";

import { LoginLayout } from "../layout/login-layout";
import { SignUp } from "../components/signup/signup";

const INITIAL_SIGNUP_INPUT_FOCUS_STATE: SignUpInputFocus = {
  email: false,
  password: false,
  confirmPassword: false,
  username: false,
};

export type SignUpInputFocus = {
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
  username: boolean;
};

export function SignUpScreen() {
  const [isFocused, setIsFocused] = useState<SignUpInputFocus>(
    INITIAL_SIGNUP_INPUT_FOCUS_STATE
  );

  return (
    <LoginLayout
      firstBubbleButtomY={-80}
      secondBubbleButtomY={-150}
      thirdBubbleButtomY={-70}
      children={
        <SignUp
          formTitle="Crear cuenta"
          isFocused={isFocused}
          setIsFocused={setIsFocused}
        />
      }
    />
  );
}
