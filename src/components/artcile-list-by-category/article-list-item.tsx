import { StyleSheet, Text, View } from "react-native";

import { Category } from "../../services/category";
import { useArticleListDetailStore } from "../../store/article-list-detail";
import { useArticlesStore } from "../../store/articles";
import { ButtonIcon } from "../button-icon/button-icon";
import { CategoryIcon } from "../category-dropdown/category-icon";

import { DETAILS_ICONS } from "../../../assets";
import { FONT_SIZES } from "../../constants/font";
import { useUserPreferencesStore } from "../../store/user-preferences";

interface ArticleListItemProps {
	title: Category["categoryName"];
	jumpTo: (route: string) => void;
}

export function ArticleListItem(props: ArticleListItemProps) {
	const { title, jumpTo } = props;

	const { colorScheme } = useUserPreferencesStore((state) => state.userPreferences);
	const articles = useArticlesStore((state) => state.articles);
	const { setArticleCategoryDetailListName } = useArticleListDetailStore((state) => state);

	const handlePress = () => {
		setArticleCategoryDetailListName(title);
		jumpTo("third");
	};

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
				action={handlePress}
				icon={DETAILS_ICONS.DETAILS}
				label="Detalles"
				outlineColor={colorScheme.PRIMARY_WHITE}
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
		minWidth: "85%",
		maxWidth: "85%",
		width: "47%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "white",
		borderRadius: 10,
		borderColor: "gray",
		paddingVertical: 15,
		marginVertical: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 10,
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
