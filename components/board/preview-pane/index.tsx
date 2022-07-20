import { Flex } from "@chakra-ui/react";
import Preview from "components/preview";
import React from "react";

const PreviewPane = () => {
  return (
    <Flex pos="absolute" boxSize="full">
      <Preview />
    </Flex>
  );
};

export default PreviewPane;
