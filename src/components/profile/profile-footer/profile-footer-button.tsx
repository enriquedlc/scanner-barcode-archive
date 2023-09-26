import {
  Image,
  Text,
  TouchableOpacity,
  ImageProps,
  StyleSheet,
} from "react-native";

import { profileStyles } from "../../../screens/profile-screen/profile-styles";

interface ProfileFooterButtonProps {
  label: string;
  icon: ImageProps;
  outlineColor: string;
  action: () => void;
}

export function ProfileFooterButton(props: ProfileFooterButtonProps) {
  const { label, icon, outlineColor } = props;
  return (
    <TouchableOpacity
      onPress={props.action}
      style={[profileFooterButtonStyles.button, { borderColor: outlineColor }]}
    >
      <Text style={profileStyles.profileDefaultLabel}>{label}</Text>
      <Image source={icon} style={profileStyles.profileIcon} />
    </TouchableOpacity>
  );
}

const profileFooterButtonStyles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignSelf: "center",
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 2,
    borderRadius: 10,
  },
});
