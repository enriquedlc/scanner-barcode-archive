import { SafeAreaView, StyleSheet, View, Platform } from "react-native";

import { SearchBar } from "@rneui/base/dist/SearchBar/index";
import { ArticleList } from "../article-list/article-list";

import { articleListStylesComponentProps } from "../home/home-styles";

export function Search() {
  // TODO: Implement search functionality
  // TODO: Pass filtered articles to ArticleList component
  return (
    <SafeAreaView style={searchStyles.container}>
      <View style={{ maxWidth: "87%", minWidth: "87%", paddingTop: "20%" }}>
        <SearchBar
          placeholder="Buscar artículo..."
          platform={Platform.OS === "ios" ? "ios" : "android"}
          containerStyle={searchStyles.searchbar}
          inputContainerStyle={{ borderRadius: 10, maxHeight: 30 }}
        />
      </View>
      <ArticleList
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
