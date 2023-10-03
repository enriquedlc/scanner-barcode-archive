import { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { ArticleList } from "../article-list/article-list";

import { useArticlesStore } from "../../store/articles";
import { useUserAuthStore } from "../../store/user-auth";

import { articleListStylesComponentProps } from "./home-styles";

export function Home() {
  const { articles, fetchArticles } = useArticlesStore((state) => state);
  const user = useUserAuthStore((state) => state.user);

  // TODO: implement loading state
  // rome-ignore lint/nursery/useExhaustiveDependencies: <>
  useEffect(() => {
    console.log("user", user);
    if (user?.id) fetchArticles(user.id);
  }, [user]);

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
