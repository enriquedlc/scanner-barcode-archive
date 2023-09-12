import { Text } from "react-native";

import { articleInfoModalStyles } from "./article-info-modal-styles";

interface ArticleModalStatProps {
  label: string;
  value: string;
}

export function ArticleModalStat(props: ArticleModalStatProps) {
  const { label, value } = props;

  return (
    <Text style={articleInfoModalStyles.label}>
      {label}: <Text style={articleInfoModalStyles.value}>{value}</Text>
    </Text>
  );
}
