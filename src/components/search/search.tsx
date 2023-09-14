import { useState } from "react";
import { SafeAreaView, StyleSheet, View, Platform } from "react-native";

import { Article } from "../../types/article";
import { SearchBar } from "@rneui/base/dist/SearchBar/index";
import { ArticleList } from "../article-list/article-list";

import { articleListStylesComponentProps } from "../home/home-styles";

import articlesMock from "../../data/articles.json";
const articles: Article[] = articlesMock;

export function Search() {
  const [searchText, setSearchText] = useState("");

  const updateSearchText = (text: string) => setSearchText(text);

  // TODO: Implement search functionality for different article properties
  const filteredArticles = articles.filter((article) =>
    article.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={searchStyles.container}>
      <View style={{ maxWidth: "87%", minWidth: "87%", paddingTop: "20%" }}>
        <SearchBar
          value={searchText}
          onChangeText={updateSearchText}
          placeholder="Buscar artículo..."
          platform={Platform.OS === "ios" ? "ios" : "android"}
          containerStyle={searchStyles.searchbar}
          inputContainerStyle={{ borderRadius: 10, maxHeight: 30 }}
        />
      </View>
      <ArticleList
        data={filteredArticles}
        articleListStyleComponentProps={articleListStylesComponentProps}
      />
    </SafeAreaView>
  );
}

const searchStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchbar: {
    borderRadius: 10,
    maxHeight: 50,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 20,
  },
});
