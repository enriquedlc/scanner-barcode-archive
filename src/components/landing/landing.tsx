import { Text, View, Image } from "react-native";

import { ButtonLanding } from "../button-landing/button-landing";
import { useAppNavigation } from "../../hooks/useAppNavigation";

import { LOGOS, TOOLS } from "../../../assets";

import { landingStyles, toolStyles } from "./landing-styles";

export function Landing() {
	const { navigation } = useAppNavigation();

	return (
		<View style={landingStyles.container}>
			<Image
				style={landingStyles.splashLogo}
				source={LOGOS.SPLASH_LOGO}
				alt="article-scanner-logo"
			/>
			<Text style={landingStyles.title}>ARTICLE SCANNER</Text>
			<View style={landingStyles.firstBubble}>
				<View style={landingStyles.buttonsContainer}>
					<ButtonLanding
						title="Iniciar sesión"
						onPress={() => navigation.navigate("LOGIN_SCREEN")}
					/>
					<ButtonLanding
						title="Crear cuenta"
						outLined={true}
						onPress={() => navigation.navigate("SIGN_UP_SCREEN")}
					/>
				</View>
			</View>
			<Image source={TOOLS.hammer} alt="hammer" style={toolStyles.hammer} />
			<Image source={TOOLS.saw} alt="saw" style={toolStyles.saw} />
			<Image source={TOOLS.work_tools} alt="saw" style={toolStyles.work_tools} />
			<View style={landingStyles.secondBubble} />
			<View style={landingStyles.thridBubble} />
		</View>
	);
}
