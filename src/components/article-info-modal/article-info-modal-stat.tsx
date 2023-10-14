import { StyleSheet, Text } from "react-native";

import { Article } from "../../types/article";
import { formatDate } from "../../utils/date";
import { BarcodeCategoryTags } from "../barcode-category-tags/barcode-category-tags";

import { BLUE_PALLETE } from "../../constants/colors/colors";
import { FONT_SIZES } from "../../constants/font";

interface ArticleModalStatProps {
	label: string;
	value: string | number;
}

function ArticleModalStat(props: ArticleModalStatProps) {
	const { label, value } = props;

	return (
		<Text style={styles.label}>
			{label}: <Text style={styles.value}>{value}</Text>
		</Text>
	);
}

export function ArticleInfoModalStats({ article }: { article: Article }) {
	return (
		<>
			<BarcodeCategoryTags barcode={article.barcode} categoryName={article.categoryName} />

			<ArticleModalStat label="Nombre" value={article.articleName} />
			<ArticleModalStat label="Exhibición" value={article.exhibition} />
			<ArticleModalStat label="Estantería" value={article.shelf} />
			<ArticleModalStat label="Almacén" value={article.warehouse} />
			<ArticleModalStat label="Creado" value={formatDate(article.createdAt)} />
			<ArticleModalStat label="Actualizado" value={formatDate(article.updatedAt)} />
		</>
	);
}

const styles = StyleSheet.create({
	label: {
		fontSize: FONT_SIZES.MEDIUM,
		color: BLUE_PALLETE.PRIMARY_BLACK,
		fontWeight: "bold",
	},
	value: {
		fontSize: FONT_SIZES.MEDIUM,
		color: BLUE_PALLETE.SECONDARY_BLACK,
		fontWeight: "normal",
	},
});
