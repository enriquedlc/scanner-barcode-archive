import { View, Text, Image } from "react-native";

import { Article } from "../../../types/article";

import { TOOLS } from "../../../../assets";

import { articleItemStyles } from "../article-item-styles";

export const ArticleItemHeader = ({
  articleName,
  barcode,
}: Partial<Article>) => (
  <View style={articleItemStyles.articleItemHeader}>
    <Image
      style={articleItemStyles.articleHeaderIcon}
      source={TOOLS.toolBox}
      alt="tool-box"
    />
    <View style={articleItemStyles.articleItemHeaderDescription}>
      <Text style={articleItemStyles.articleItemTitle}>{articleName}</Text>
      <View style={articleItemStyles.articleItemBarcodeContainer}>
        <Text style={articleItemStyles.articleItemBarcode}>{barcode}</Text>
      </View>
    </View>
  </View>
);
