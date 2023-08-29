import { StyleSheet } from "react-native";

import { FONT_SIZES } from "../../constants/font";
import { BLUE_PALLETE } from "../../constants/colors";

export const signUpStyles = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 40,
    gap: 20,
  },
  formTitle: {
    fontSize: FONT_SIZES.EXTRA_EXTRA_LARGE,
    color: BLUE_PALLETE.PRIMARY_WHITE,
    fontWeight: "800",
  },
  inputContainer: {
    borderColor: "black",
    minWidth: "65%",
  },
  inputLabel: {
    fontSize: FONT_SIZES.LARGE,
    color: BLUE_PALLETE.PRIMARY_WHITE,
    fontWeight: "600",
    paddingBottom: 5,
  },
  input: {
    fontSize: FONT_SIZES.LARGE,
    color: BLUE_PALLETE.SECONDARY_WHITE,
    backgroundColor: BLUE_PALLETE.SECONDARY,
    fontWeight: "500",
    paddingVertical: 7,
    borderRadius: 5,
    paddingLeft: 10,
  },
});
