import {
	Image,
	ImageProps,
	ImageStyle,
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from "react-native";

import { profileStyles } from "../../screens/profile-screen/profile-styles";

interface ButtonIconsProps {
	label: string;
	icon: ImageProps;
	outlineColor: string;
	action: () => void;
	displayLabel?: boolean;
	touchableStyles?: StyleProp<ViewStyle>;
	textStyles?: StyleProp<TextStyle>;
	imageSytles?: StyleProp<ImageStyle>;
}

export function ButtonIcon(props: ButtonIconsProps) {
	// creators and contributors mention to the people who made the icons
	const {
		label,
		icon,
		outlineColor,
		action,
		displayLabel,
		imageSytles,
		textStyles,
		touchableStyles,
	} = props;
	return (
		<TouchableOpacity
			onPress={action}
			style={[
				touchableStyles || profileFooterButtonStyles.button,
				{ borderColor: outlineColor },
			]}
		>
			{displayLabel && (
				<Text style={textStyles || profileStyles.profileDefaultLabel}>{label}</Text>
			)}
			<Image source={icon} style={imageSytles || profileStyles.profileIcon} />
		</TouchableOpacity>
	);
}

const profileFooterButtonStyles = StyleSheet.create({
	button: {
		flexDirection: "row",
		alignSelf: "center",
		borderWidth: 2,
		paddingHorizontal: 10,
		paddingTop: 10,
		paddingBottom: 2,
		borderRadius: 10,
	},
});
