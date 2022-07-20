import React from "react";
import { LiveError, LivePreview, LiveProvider } from "react-live";
import Frame from "./frame";
import { chakraScope } from "utils/chakra-scope";
import { parseAppCode, themeCode } from "utils/parse-code";
import { usePlaygroundContext } from "utils/context";

const ChakraPlayApp = () => {
  const { appValue } = usePlaygroundContext();
  const code = parseAppCode(appValue);
  return (
    <LiveProvider scope={chakraScope} code={code}>
      <LivePreview />
    </LiveProvider>
  );
};

const Preview = () => {
  const { overrides } = usePlaygroundContext();
  const themedCode = themeCode(overrides);
  return (
    <>
      <LiveProvider scope={{ ...chakraScope, ChakraPlayApp }} code={themedCode}>
        <LiveError />
        <Frame>
          <LivePreview />
        </Frame>
      </LiveProvider>
    </>
  );
};

export default Preview;
