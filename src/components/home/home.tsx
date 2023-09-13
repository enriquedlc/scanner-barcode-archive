import { StyleSheet, SafeAreaView } from "react-native";

import { ArticleList } from "../article-list/article-list";
import { useUserAuthStore } from "../../store/user-auth";

import { articleListStylesComponentProps } from "./home-styles";

export function Home() {
  const user = useUserAuthStore((state) => state.user);

  console.log(user);

  return (
    <SafeAreaView style={homeStyles.container}>
      <ArticleList
        title="Últimos artículos añadidos"
        articleListStyleComponentProps={articleListStylesComponentProps}
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
