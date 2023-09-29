import { StyleSheet, SafeAreaView } from "react-native";

import { ArticleList } from "../article-list/article-list";

import { articleListStylesComponentProps } from "./home-styles";
import { useArticlesStore } from "../../store/articles";
import { useEffect } from "react";
import { useUserAuthStore } from "../../store/user-auth";

export function Home() {
  const { articles, fetchArticles } = useArticlesStore((state) => state);
  const user = useUserAuthStore((state) => state.user);

  // TODO: implement loading state
  useEffect(() => {
    if (user?.id) fetchArticles(user.id);
  }, []);

  return (
    <SafeAreaView style={homeStyles.container}>
      <ArticleList
        title="Últimos artículos añadidos"
        articleListStyleComponentProps={articleListStylesComponentProps}
        data={articles}
      />
    </SafeAreaView>
  );
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
