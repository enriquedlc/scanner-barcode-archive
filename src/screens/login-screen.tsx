import { Login } from "../components/login/login";
import { LoginLayout } from "../layout/login-layout";

export type LoginInputFocus = {
  username: boolean;
  password: boolean;
};

export function LoginScreen() {
  return (
    <LoginLayout
      firstBubbleButtomY={-160}
      secondBubbleButtomY={-130}
      thirdBubbleButtomY={-100}
      children={<Login formTitle="Iniciar sesión" />}
    />
  );
}
