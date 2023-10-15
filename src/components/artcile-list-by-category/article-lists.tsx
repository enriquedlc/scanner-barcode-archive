import { View } from "react-native";
import { useCategoriesStore } from "../../store/categories";
import { ArticleListItem } from "./article-list-item";

export function ArticleLists() {
    const categories = useCategoriesStore((state) => state.categories);
   
    return (
        <View>
            {
                categories.map((category) => (
                    <ArticleListItem key={category.id} title={category.categoryName} />
                ))
            }
        </View>
    )
}