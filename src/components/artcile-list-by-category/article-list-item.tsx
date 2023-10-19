import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Category } from "../../services/category";

interface ArticleListItemProps {
	title: Category["categoryName"];
}

export function ArticleListItem(props: ArticleListItemProps) {
	const { title } = props;

	return (
		<View style={styles.container}>
			<Text>{title}</Text>
			<TouchableOpacity>
				<Text>Detalles</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		minWidth: "90%",
		maxWidth: "90%",
		height: 100,
		backgroundColor: "white",
		borderRadius: 10,
		borderColor: "gray",
		borderWidth: 1,
		marginVertical: 10,
	},
});
