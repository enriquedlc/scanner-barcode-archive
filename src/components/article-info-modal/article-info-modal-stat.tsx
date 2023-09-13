import { Text, StyleSheet } from "react-native";

import { BLUE_PALLETE } from "../../constants/colors/colors";
import { FONT_SIZES } from "../../constants/font";

interface ArticleModalStatProps {
  label: string;
  value: string;
}

export function ArticleModalStat(props: ArticleModalStatProps) {
  const { label, value } = props;

  return (
    <Text style={styles.label}>
      {label}: <Text style={styles.value}>{value}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: FONT_SIZES.MEDIUM,
    color: BLUE_PALLETE.PRIMARY_BLACK,
    fontWeight: "bold",
  },
  value: {
    fontSize: FONT_SIZES.MEDIUM,
    color: BLUE_PALLETE.SECONDARY_BLACK,
    fontWeight: "normal",
  },
});
