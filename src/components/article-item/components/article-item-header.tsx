import { View, Text, Image } from "react-native";

import { Article } from "../../../types/article";

import { TOOLS } from "../../../../assets";

import { articleItemStyles } from "../article-item-styles";

export const ArticleItemHeader = ({ name, barcode }: Partial<Article>) => (
  <View style={articleItemStyles.articleItemHeader}>
    <Image
      style={articleItemStyles.articleHeaderIcon}
      source={TOOLS.toolBox}
      alt="tool-box"
    />
    <View style={articleItemStyles.articleItemHeaderDescription}>
      <Text style={articleItemStyles.articleItemTitle}>{name}</Text>
      <Text style={articleItemStyles.articleItemBarcode}>
        {barcode}123412341
      </Text>
    </View>
  </View>
);
