import React from "react";
import { Flex } from "@chakra-ui/react";
import EditorTabs from "./editor-tabs";
import { Editor } from "components/editor";

const EditorPane = (props: any) => {
  const { width } = props.dimensions;

  return (
    <Flex direction="column" w={width} h="full">
      <EditorTabs />
      <Flex boxSize="full">
        <Editor />
      </Flex>
    </Flex>
  );
};

export default EditorPane;
