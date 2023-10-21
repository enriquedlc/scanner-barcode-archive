import { StyleSheet, Text, View } from "react-native";
import { DETAILS_ICONS } from "../../../assets";
import { BLUE_PALLETE } from "../../constants/colors/colors";
import { FONT_SIZES } from "../../constants/font";
import { Category } from "../../services/category";
import { useArticlesStore } from "../../store/articles";
import { ButtonIcon } from "../button-icon/button-icon";
import { CategoryIcon } from "../category-dropdown/category-icon";

interface ArticleListItemProps {
	title: Category["categoryName"];
}

export function ArticleListItem(props: ArticleListItemProps) {
	const { title } = props;
	const articles = useArticlesStore((state) => state.articles);

	return (
		<View style={styles.container}>
			<View style={styles.listDescription}>
				<CategoryIcon categoryName={title} imageStyles={{ width: 25, height: 25 }} />
				<Text style={styles.categoryListTitle}>{title}</Text>
				<Text style={styles.categoryListCountText}>
					{articles.filter((article) => article.categoryName === title).length}
				</Text>
			</View>
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
		backgroundColor: "white",
		borderRadius: 10,
		borderColor: "gray",
		borderWidth: 1,
		paddingVertical: 5,
		marginVertical: 5,
	},
	listDescription: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		paddingLeft: 10,
		gap: 10,
	},
	categoryListCountText: {
		fontSize: FONT_SIZES.MEDIUM,
	},
	categoryListTitle: {
		fontSize: FONT_SIZES.MEDIUM_MEDIUM,
		fontWeight: "bold",
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
