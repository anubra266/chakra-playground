import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { lightTheme } from "./light";
import { darkTheme } from "./dark";
import { defineTheme } from "utils/define-theme";

export const useEditorTheme = (): any => {
  const template = useColorModeValue(
    { name: "light", styles: lightTheme },
    { name: "dark", styles: darkTheme }
  );
  const { colorMode } = useColorMode();
  //   const [theme, setTheme] = useState<string>(colorMode);
  useEffect(() => {
    defineTheme(template.name, template.styles).then(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode]);
  return { theme: colorMode };
};
