import { useState } from "react";

import { SignUp } from "../components/signup/signup";
import { LoginLayout } from "../layout/login-layout";

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
      firstBubbleButtomY={-30}
      secondBubbleButtomY={-150}
      thirdBubbleButtomY={-100}
      children={<SignUp isFocused={isFocused} setIsFocused={setIsFocused} />}
    />
  );
}
