import { ReactNode } from "react";
import { Image, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { LANDING } from "../../assets";
import { useUserPreferencesStore } from "../store/user-preferences";

type LoginLayoutProps = {
	children: ReactNode;
	firstBubbleButtomY: number;
	secondBubbleButtomY: number;
	thirdBubbleButtomY: number;
};

export function LoginLayout(props: LoginLayoutProps) {
	const { children, firstBubbleButtomY, secondBubbleButtomY, thirdBubbleButtomY } = props;

	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<View
					style={[
						{ bottom: firstBubbleButtomY },
						styles.firstBubble,
						{
							backgroundColor: colorScheme.PRIMARY,
						},
					]}
				>
					{children}
				</View>
				<View
					style={[
						{ bottom: secondBubbleButtomY },
						styles.secondBubble,
						{
							backgroundColor: colorScheme.SECONDARY,
						},
					]}
				/>
				<View
					style={[
						{ bottom: thirdBubbleButtomY },
						styles.thridBubble,
						{
							backgroundColor: colorScheme.TERTIARY,
						},
					]}
				>
					<Image source={LANDING.scanner} style={styles.icon} alt="scanner" />
					<Image source={LANDING.box} style={styles.icon} alt="box" />
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	firstBubble: {
		zIndex: -10,
		width: "130%",
		height: "100%",
		borderTopEndRadius: 400,
		borderTopStartRadius: 400,
		justifyContent: "center",
		position: "absolute",
		alignItems: "center",
		// bottom: -30,
	},
	secondBubble: {
		zIndex: -20,
		width: "130%",
		height: "100%",
		borderTopEndRadius: 400,
		borderTopStartRadius: 400,
		position: "absolute",
		// bottom: -150,
	},
	thridBubble: {
		zIndex: -30,
		width: "130%",
		height: "100%",
		borderTopEndRadius: 400,
		borderTopStartRadius: 400,
		flexDirection: "row",
		justifyContent: "center",
		position: "absolute",
	},
	icon: {
		width: 50,
		height: 50,
		resizeMode: "contain",
		top: -50,
	},
});
