import React from "react";
import { Image, ImageProps, Linking, StyleSheet, Text, TouchableOpacity } from "react-native";

interface AttributionItemProps {
	image: ImageProps["source"];
	linkUrl: string;
}

export function AttributionItem({ image, linkUrl }: AttributionItemProps) {
	const handlePress = () => {
		Linking.openURL(linkUrl);
	};

	return (
		<TouchableOpacity style={styles.container} onPress={handlePress}>
			<Image source={image} style={styles.image} />
			<Text style={styles.text}>{linkUrl}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#f2f2f2",
		padding: 10,
		borderRadius: 5,
		marginVertical: 5,
		borderBottomColor: "#000",
		borderBottomWidth: 0.3,
		paddingBottom: 20,
	},
	image: {
		width: 30,
		height: 30,
		marginRight: 10,
	},
	text: {
		fontSize: 12,
		fontWeight: "bold",
	},
});
