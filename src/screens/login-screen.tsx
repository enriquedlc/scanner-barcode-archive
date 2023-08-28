import { useState } from "react";

import { LoginLayout } from "../layout/login-layout";
import { Login } from "../components/login/login";

export type LoginInputFocus = {
  username: boolean;
  password: boolean;
};

export function LoginScreen() {
  const [isFocused, setIsFocused] = useState<LoginInputFocus>({
    username: false,
    password: false,
  });

  // const handleLogin = () => {
  //   console.log("login action");
  // };

  return (
    <LoginLayout
      children={<Login isFocused={isFocused} setIsFocused={setIsFocused} />}
    />
  );
}
