import { Layout, Tab, TabKey } from "utils/types";
import { BsLayoutSplit, BsLayoutTextSidebar } from "react-icons/bs";
import { IoBrowsersOutline } from "react-icons/io5";
import { VscSplitVertical } from "react-icons/vsc";

export enum Orientation {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
  PREVIEW = "preview",
  EDITOR = "editor",
}

export const DEFAULT_TABS: Tab[] = [{ key: "App" }, { key: "styles" }];

export const layouts: Layout[] = [
  {
    key: Orientation.HORIZONTAL,
    title: "Horizontal Split",
    icon: VscSplitVertical,
  },
  {
    key: Orientation.VERTICAL,
    title: "Vertical Split",
    icon: BsLayoutSplit,
  },
  {
    key: Orientation.PREVIEW,
    title: "Full Preview",
    icon: IoBrowsersOutline,
  },
  {
    key: Orientation.EDITOR,
    title: "Full Editor",
    icon: BsLayoutTextSidebar,
  },
];
