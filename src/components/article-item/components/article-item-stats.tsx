import { View, Text } from "react-native";

import { Article } from "../../../types/article";

import { articleItemStyles } from "../article-item-styles";

export const ArticleItemStats = ({ exhibition, shelf, warehouse }: Partial<Article>) => (
	<View style={articleItemStyles.articleItemDescription}>
		<View style={{ alignItems: "center" }}>
			<Text>{exhibition}</Text>
			<Text style={{ fontWeight: "bold" }}>Exhibición</Text>
		</View>
		<View style={{ alignItems: "center" }}>
			<Text>{shelf}</Text>
			<Text style={{ fontWeight: "bold" }}>Estantería</Text>
		</View>
		<View style={{ alignItems: "center" }}>
			<Text>{warehouse}</Text>
			<Text style={{ fontWeight: "bold" }}>Almacén</Text>
		</View>
	</View>
);
