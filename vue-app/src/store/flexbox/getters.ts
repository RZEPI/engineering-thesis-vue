import { State } from ".";
import { CSSProperties } from "vue";
import { FlexboxElement } from "../../models/flexbox-generator/FlexboxElement";

export type Getters = {
  getStyleObject(state: State): CSSProperties;
  getContentList(state: State): FlexboxElement[];
  getWrapping(state: State): boolean;
};

export const getters: Getters = {
  getStyleObject(state) {
    const styleObject: CSSProperties = {
      "flex-wrap": state.wrapping ? "wrap" : "nowrap",
      "flex-direction": state.direction ? "column" : "row",
      "justify-content": state.justifyContent as string,
      "align-items": state.alignItems as string,
    };
    if (state.wrapping)
      styleObject["align-content"] = state.alignContent as string;

    return styleObject;
  },
  getContentList(state) {
    return state.content;
  },
  getWrapping(state) {
    return state.wrapping;
  },
};
