import { Image, Text, View } from "react-native";

import { useAppNavigation } from "../../hooks/useAppNavigation";
import { ButtonLanding } from "../button-landing/button-landing";

import { LOGOS, TOOLS } from "../../../assets";

import { useUserPreferencesStore } from "../../store/user-preferences";
import { landingStyles, toolStyles } from "./landing-styles";

export function Landing() {
	const { navigation } = useAppNavigation();

	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	return (
		<View style={landingStyles.container}>
			<Image
				style={landingStyles.splashLogo}
				source={LOGOS.SPLASH_LOGO}
				alt="article-scanner-logo"
			/>
			<Text style={landingStyles.title}>ARTICLE SCANNER</Text>
			<View style={[landingStyles.firstBubble, { backgroundColor: colorScheme.PRIMARY }]}>
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
			<Image source={TOOLS.workTools} alt="saw" style={toolStyles.workTools} />
			<View style={[landingStyles.secondBubble, { backgroundColor: colorScheme.TERTIARY }]} />
			<View
				style={[landingStyles.thridBubble, { backgroundColor: colorScheme.QUATERNARY }]}
			/>
		</View>
	);
}
