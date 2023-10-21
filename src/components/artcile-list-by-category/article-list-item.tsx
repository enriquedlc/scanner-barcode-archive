import { StyleSheet, Text, View } from "react-native";
import { DETAILS_ICONS } from "../../../assets";
import { BLUE_PALLETE } from "../../constants/colors/colors";
import { FONT_SIZES } from "../../constants/font";
import { Category } from "../../services/category";
import { ButtonIcon } from "../button-icon/button-icon";

interface ArticleListItemProps {
	title: Category["categoryName"];
}

export function ArticleListItem(props: ArticleListItemProps) {
	const { title } = props;

	return (
		<View style={styles.container}>
			<Text>{title}</Text>
			<ButtonIcon
				action={() => console.log("details")}
				icon={DETAILS_ICONS.DETAILS}
				label="Detalles"
				outlineColor={BLUE_PALLETE.BLUE}
				displayLabel={false}
				touchableStyles={styles.touchableStyles}
				textStyles={styles.textStyles}
				imageSytles={styles.imageSytles}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		minWidth: "90%",
		maxWidth: "90%",
		height: 100,
		backgroundColor: "white",
		borderRadius: 10,
		borderColor: "gray",
		borderWidth: 1,
		marginVertical: 10,
	},
	touchableStyles: {
		gap: 7,
		flexDirection: "row",
		alignSelf: "center",
		borderWidth: 2,
		marginRight: 10,
		paddingHorizontal: 5,
		paddingTop: 4,
		paddingBottom: 3,
		borderRadius: 5,
	},
	textStyles: {
		fontSize: FONT_SIZES.MEDIUM,
	},
	imageSytles: {
		width: 20,
		height: 20,
	},
});
