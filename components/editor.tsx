import Script from "next/script";
import loader from "@monaco-editor/loader";
import { useEditorTheme } from "utils/editor-themes/use-editor-theme";
import { Sandbox, SandboxConfig } from "@typescript/sandbox";
import { useRef } from "react";
import { usePlaygroundContext } from "utils/context";
import { chakra } from "@chakra-ui/react";

declare var window: Window &
  typeof globalThis & {
    ts: typeof import("typescript");
  };

const initialCode = `import React from "react"
  import { ChakraProvider, Box } from "@chakra-ui/react"
    
    function App(){
      return (
          <ChakraProvider>
              <Box bg="red.300">
                  wow
              </Box>
          </ChakraProvider>
      )
    }
    `;

type EditorProps = {};
export const Editor = (props: EditorProps) => {
  const {} = props;
  const { theme } = useEditorTheme();
  const { setForModel, activeTab, appValue } = usePlaygroundContext();
  const initialCode = appValue;
  const sandboxRef = useRef<Sandbox>();

  return (
    <>
      <Script
        src="https://www.typescriptlang.org/js/vs.loader.js"
        async
        onLoad={async () => {
          require("monaco-editor/min/vs/language/typescript/tsWorker");
          const sandboxFactory = await import("@typescript/sandbox").then(
            (d) => d
          );
          loader.init().then((monaco) => {
            const isOK = monaco && window.ts && sandboxFactory;

            // Create a sandbox and embed it into the the div #monaco-editor-embed
            const sandboxConfig: Partial<SandboxConfig> = {
              text: initialCode,
              compilerOptions: {},
              domID: "monaco-editor",
              supportTwoslashCompilerOptions: true,
              monacoSettings: {
                autoIndent: "full",
                wordWrap: "off",
                smoothScrolling: true,
                dragAndDrop: true,
                formatOnPaste: false,
                formatOnType: false,
              },
            };

            const sandbox = sandboxFactory.createTypeScriptSandbox(
              sandboxConfig,
              monaco,
              window.ts
            );
            if (isOK) {
              document
                ?.getElementById("loader")
                ?.parentNode?.removeChild(document?.getElementById("loader")!);
            } else {
              console.error(
                "Could not get all the dependencies of sandbox set up!"
              );
              console.error("monaco", !!monaco, "ts", !!window.ts);
              return;
            }
            sandbox.editor.focus();
            monaco.editor.setTheme(theme);

            const currentModel = sandbox.editor.getModel();
            currentModel.onDidChangeContent(() => {
              const value = currentModel.getValue();
              // whatever I want with the value
              setForModel({ key: activeTab, type: "value", value });
            });

            //TODO Editor path for multi modelling

            sandboxRef.current = sandbox;
          });
        }}
      />
      <div id="loader">Loading...</div>
      <chakra.div id="monaco-editor" boxSize="full" />
    </>
  );
};
