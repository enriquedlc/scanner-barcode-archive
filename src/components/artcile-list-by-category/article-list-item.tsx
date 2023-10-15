import { Text, View } from "react-native";
import { Category } from "../../services/category";

interface ArticleListItemProps {
    title: Category["categoryName"]
}

export function ArticleListItem(props: ArticleListItemProps) {
    const { title } = props;

	return (
		<View>
			<Text>{title}</Text>
		</View>
	);
}
