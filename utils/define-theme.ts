import loader from "@monaco-editor/loader";

// import monacoThemes from "monaco-themes/themes/themelist.json";

export const defineTheme = (theme: any, themeData: any) => {
  // const themeList = JSON.parse(JSON.stringify(monacoThemes));
  // const newTheme = themeList[theme];
  return new Promise<void>((res) => {
    Promise.all([loader.init()]).then(([monaco]) => {
      monaco.editor.defineTheme(theme, themeData);
      monaco.editor.setTheme(theme);
      res(theme);
    });
  });
};
