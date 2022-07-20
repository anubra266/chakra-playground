import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { MenuBar } from "../menu-bar";
import Board from "../board";
import { PlaygroundContext, PlaygroundProvider } from "utils/context";
import { DEFAULT_TABS, Orientation } from "utils/constants";
import { TabKey } from "utils/types";
import { defaultCode } from "utils/default-code";
import { models } from "utils/models";

export default function Playground() {
  const [orientation, setOrientation] = useState(Orientation.VERTICAL);
  const [overrides, setOverrides] = useState(defaultCode);
  const [appValue, setAppValue] = useState(models.App.defaultValue);

  const [activeTab, setActiveTab] = useState("App");

  const [tabs, setTabs] = useState(DEFAULT_TABS);
  const removeTab = (keyToRemove: TabKey) => {
    setTabs((prev) =>
      prev.splice(
        prev.findIndex(({ key }) => key == keyToRemove),
        1
      )
    );
  };

  const setForModel = ({
    key,
    type,
    value,
  }: {
    key: TabKey;
    type: string;
    value: string;
  }) => {
    if (key === "App") {
      setAppValue(value);
    } else {
      setOverrides((prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          [type]: value,
        },
      }));
    }
  };

  const context: PlaygroundContext = {
    orientation,
    setOrientation,
    overrides,
    setForModel,
    activeTab,
    setActiveTab,
    tabs,
    setTabs,
    removeTab,
    appValue,
  };

  return (
    <PlaygroundProvider value={context}>
      <Flex pos="fixed" boxSize="full" direction="column">
        <MenuBar />
        <Board />
      </Flex>
    </PlaygroundProvider>
  );
}
