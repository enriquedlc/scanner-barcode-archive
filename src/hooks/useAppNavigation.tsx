import { useNavigation } from "@react-navigation/native";
import { RootStackParamList, RootStackParamName } from "../constants/routes";

import { StackNavigationProp } from "@react-navigation/stack";

export function useAppNavigation() {
  const navigation =
    useNavigation<
      StackNavigationProp<RootStackParamList, RootStackParamName>
    >();

  return { navigation };
}
