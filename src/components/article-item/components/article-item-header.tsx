import { View, Text, Image } from "react-native";

import { Article } from "../../../types/article";

import { TOOLS } from "../../../../assets";
import { BLUE_PALLETE } from "../../../constants/colors/colors";

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
      <View
        style={{
          borderRadius: 5,
          backgroundColor: BLUE_PALLETE.BLUE,
          width: "50%",
        }}
      >
        <Text style={articleItemStyles.articleItemBarcode}>
          {barcode}123412341
        </Text>
      </View>
    </View>
  </View>
);
