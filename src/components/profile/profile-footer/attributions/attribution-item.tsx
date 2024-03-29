import React from "react";
import { Image, ImageProps, Linking, StyleSheet, Text, TouchableOpacity } from "react-native";

interface AttributionItemProps {
	image: ImageProps["source"];
	linkUrl: string;
}

const parseUrl = (url: string) => {
	const parsedUrl = url.split("www.")[1];
	if (url.length > 50) return `${parsedUrl.substring(0, 35)}...`;
	return parsedUrl;
};

export function AttributionItem({ image, linkUrl }: AttributionItemProps) {
	const handlePress = () => {
		Linking.openURL(linkUrl);
	};

	return (
		<TouchableOpacity style={styles.container} onPress={handlePress}>
			<Image source={image} style={styles.image} />
			<Text style={styles.text}>{parseUrl(linkUrl)}</Text>
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
		width: "98%",
	},
	image: {
		width: 30,
		height: 30,
		marginRight: 7,
	},
	text: {
		fontSize: 12,
	},
});
