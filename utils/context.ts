import { createContext } from "@chakra-ui/react-utils";
import { Orientation } from "utils/constants";
import { TabKey } from "utils/types";

export type PlaygroundContext = {
  orientation: Orientation;
  setOrientation: React.Dispatch<React.SetStateAction<Orientation>>;
  overrides: Record<TabKey, any>;
  setForModel: (args: { key: string; type: string; value: string }) => void;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  tabs: {
    key: string;
  }[];
  setTabs: React.Dispatch<React.SetStateAction<PlaygroundContext["tabs"]>>;
  removeTab: (keyToRemove: TabKey) => void;
  appValue: string;
};

export const [PlaygroundProvider, usePlaygroundContext] =
  createContext<PlaygroundContext>();
