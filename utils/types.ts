import { IconType } from "react-icons";
import { Orientation } from "utils/constants";
import { defaultModels } from "utils/models";

export type TabKey = keyof typeof defaultModels;

export type Tab = { key: TabKey };

export type Layout = {
  key: Orientation;
  title: string;
  icon: IconType;
};
