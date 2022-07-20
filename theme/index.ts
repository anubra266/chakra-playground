import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import styles from "./styles";
import colors from "./colors";

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ colors, config, styles });
