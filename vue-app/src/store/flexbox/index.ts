import { defineStore } from "pinia";
import { getters } from "./getters";
import { AlignItemsOptions } from "../../models/flexbox-generator/AlignItemsOptions";
import { ContentOptions } from "../../models/flexbox-generator/ContentOptions";
import { FlexboxElement } from "../../models/flexbox-generator/FlexboxElement";

export interface State {
  wrapping: boolean;
  direction: boolean;
  justifyContent: ContentOptions;
  alignItems: AlignItemsOptions;
  alignContent: ContentOptions;
  content: FlexboxElement[];
}

const DefaultContent: FlexboxElement[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

export const initialState: State = {
  wrapping: false,
  direction: false,
  justifyContent: ContentOptions.CENTER,
  alignItems: AlignItemsOptions.CENTER,
  alignContent: ContentOptions.CENTER,
  content: DefaultContent,
};

export const useFlexboxStore = defineStore('flexbox', {
  state():State{
    return initialState;
  },
  getters,
  actions: {
    toggleWrapping() {
      this.wrapping = !this.wrapping;
    },
    toggleDirection() {
      this.direction = !this.direction;
    },
    setJustifyContnent(option: ContentOptions) {
      this.justifyContent = option;
    },
    setAlignItems(option:AlignItemsOptions) {
      this.alignItems = option;
    },
    setAlignContent(option:ContentOptions) {
      this.alignContent = option;
    },
    addElement() {
      const content = this.content;
      let lastElementId = 0;

      if (content.length !== 0) lastElementId = content[content.length - 1].id;

      content.push({ id: lastElementId + 1 });
    },
    removeElement(elementId:number) {
      const content = this.content;
      this.content = content.filter((element) => element.id !== elementId);
    },
  },
});
