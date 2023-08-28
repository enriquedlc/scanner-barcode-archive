import { RootStackParamList, RootStackParamName } from "../constants/routes";
import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";

export function useAppNavigation() {
  const navigation =
    useNavigation<
      StackNavigationProp<RootStackParamList, RootStackParamName>
    >();

  return {navigation};
}
