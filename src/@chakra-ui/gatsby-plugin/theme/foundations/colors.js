import { theme } from "@chakra-ui/react";

const defaultColors = theme.colors;

const colors = {
  color: "#707070",
  bg: "#FFFFFF",
  primaryColorScheme: "gray",
  primary: "#35b8bc",
  secondary: "#fecc35",
  gradientTop: "#FFFFFF",
  gradientBottom: "#FFFFFF",
  headingColor: "black",
  cardBg: "#FFFFFF",
  cardLink: defaultColors.black,
  cardLinkHover: defaultColors.blue["600"],
  black: "#201D1D",
  tjhRed: "#e71e60",
  dark: {
    color: defaultColors.whiteAlpha["800"],
    bg: defaultColors.gray["900"],
    primary: defaultColors.blue["300"],
    gradientTop: defaultColors.gray["900"],
    gradientBottom: defaultColors.gray["700"],
    headingColor: "white",
    cardBg: defaultColors.gray["700"],
    cardLink: defaultColors.white,
    cardLinkHover: defaultColors.blue["400"],
  },
};

export default colors;
