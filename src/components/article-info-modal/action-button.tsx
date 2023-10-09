import React from "react";
import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

interface ActionButtonProps {
	text: string;
	onPress: () => void;
	buttonStyle?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onPress, buttonStyle, textStyle }) => {
	return (
		<TouchableOpacity onPress={onPress} style={[buttonStyle]}>
			<Text style={[textStyle]}>{text}</Text>
		</TouchableOpacity>
	);
};

export default ActionButton;
