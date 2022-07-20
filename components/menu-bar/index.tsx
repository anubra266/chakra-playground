import ThemeToggle from "components/theme-toggle";
import Logo from "components/logo";
import { chakra, Flex, Text } from "@chakra-ui/react";
import { EditorLayout } from "components/menu-bar/editor-layout";

export const MenuBar = () => {
  return (
    <chakra.header px="4" py="3" display="flex" alignItems="center">
      <Logo />
      <Text
        alignSelf="end"
        color="teal.400"
        fontWeight="bold"
        fontSize="lg"
        ml="1"
      >
        PLAY
      </Text>
      <Flex align="center" gap="3" ml="auto">
        <EditorLayout />
        <ThemeToggle />
      </Flex>
    </chakra.header>
  );
};
