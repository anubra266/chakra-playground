import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import "react-reflex/styles.css";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import EditorPane from "./editor-pane";
import PreviewPane from "./preview-pane";
import { usePlaygroundContext } from "utils/context";
import { Orientation } from "utils/constants";

const Board = () => {
  const splitterBg = useColorModeValue("white", "brand.bg");

  const { orientation } = usePlaygroundContext();

  const isFullPreview = [Orientation.PREVIEW, Orientation.EDITOR].includes(
    orientation
  );

  return (
    <Box
      boxSize="full"
      sx={{
        ".reflex-container > .reflex-splitter": {
          borderColor: splitterBg,
          _hover: {
            borderColor: splitterBg,
          },
          _active: {
            borderColor: splitterBg,
          },
          display: isFullPreview && "none",
        },
        ".preview": {
          flex: orientation === "preview" && "1 !important",
          display: orientation === "editor" && "none",
          overflow: "hidden",
        },
        ".editor": {
          flex: orientation === "editor" && "1 !important",
          display: orientation === "preview" && "none",
          overflow: "hidden",
        },
      }}
    >
      <ReflexContainer orientation={orientation as any}>
        <ReflexElement
          minSize={360}
          className="editor"
          propagateDimensions={true}
        >
          <EditorPane />
        </ReflexElement>

        <ReflexSplitter />

        <ReflexElement minSize={360} className="preview">
          <PreviewPane />
        </ReflexElement>
      </ReflexContainer>
    </Box>
  );
};

export default Board;
