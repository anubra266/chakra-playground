export const themeCode = (code: any): string => {
  return `
    <ChakraProvider theme={extendTheme({
       ${parseOverrides(code)}
    })}>
      <ChakraPlayApp/>
    </ChakraProvider>`;
};

const isObject = (code: string): boolean => code.indexOf("{") !== -1;
const codeExtract = (code: string, chars: string[]): string => {
  const start = code.indexOf(chars[0]);
  const end = code.lastIndexOf(chars[1]) + 1;
  return code.substring(start, end);
};

/**
 * Generates ovverrides object for Provider's theme
 * @param code Codes object
 * @returns overrides object as string
 */
export const parseOverrides = (code: any) => {
  return Object.keys(code).reduce((acc, key) => {
    const codeValue = code[key].value;
    const obj = codeExtract(
      codeValue,
      isObject(codeValue) ? ["{", "}"] : ['"', '"']
    );
    return `${acc} ${key}:${obj},`;
  }, "");
};

export const parseAppCode = (code: string) => {
  const jsxCode = code.match(/=> \{([\S\s]*)\}/)[1];
  const liveCode = `() => {
${jsxCode}
}`;
  return liveCode;
};
