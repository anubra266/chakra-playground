import { TabKey } from "utils/types";
import { models } from "./models";

export const defaultCode: Record<TabKey, { value: string }> = Object.keys(
  models
)
  .filter((m) => m !== "App")
  .reduce(
    (acc: any, nxt: string) => ({
      ...acc,
      [nxt]: { value: models[nxt].defaultValue },
    }),
    {}
  );
