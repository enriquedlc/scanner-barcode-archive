import { Text, View } from "react-native";

import { Article } from "../../../types/article";

import { articleItemStyles } from "../article-item-styles";

const ArticleItemStat = ({ label, value }: { label: string; value: number }) => (
	<View style={{ alignItems: "center" }}>
		<Text>{value}</Text>
		<Text style={{ fontWeight: "bold" }}>{label}</Text>
	</View>
);

export const ArticleItemStats = ({
	exhibition,
	shelf,
	warehouse,
}: Pick<Article, "exhibition" | "shelf" | "warehouse">) => (
	<View style={articleItemStyles.articleItemDescription}>
		<ArticleItemStat label="Exhibición" value={exhibition} />
		<ArticleItemStat label="Estantería" value={shelf} />
		<ArticleItemStat label="Almacén" value={warehouse} />
	</View>
);
