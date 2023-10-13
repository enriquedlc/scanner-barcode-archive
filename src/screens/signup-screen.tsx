import { SignUp } from "../components/signup/signup";
import { LoginLayout } from "../layout/login-layout";

export type SignUpInputFocus = {
	email: boolean;
	password: boolean;
	confirmPassword: boolean;
	username: boolean;
};

export function SignUpScreen() {
	return (
		<LoginLayout
			firstBubbleButtomY={-100}
			secondBubbleButtomY={-150}
			thirdBubbleButtomY={-90}
			children={<SignUp formTitle="Crear cuenta" />}
		/>
	);
}
