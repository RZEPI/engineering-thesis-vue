import { MutationTree } from "vuex";
import { AlignItemsOptions } from "../../models/flexbox-generator/AlignItemsOptions";
import { ContentOptions } from "../../models/flexbox-generator/ContentOptions";

import { State } from ".";
export enum MutationTypes {
  TOGGLE_WRAPPING = "toggleWrapping",
  TOGGLE_DIRECTION = "toggleDirection",
  SET_JUSTIFY_CONTENT = "setJustifyContnent",
  SET_ALIGN_ITEMS = "setAlignItems",
  SET_ALIGN_CONTENT = "setAlignContent",
  ADD_ELEMENT = "addElement",
  REMOVE_ELEMENT = "removeElement",
}

export type Mutations<S = State> = {
  [MutationTypes.TOGGLE_WRAPPING](state: S): void;
  [MutationTypes.TOGGLE_DIRECTION](state: S): void;
  [MutationTypes.SET_JUSTIFY_CONTENT](state: S, option: ContentOptions): void;
  [MutationTypes.SET_ALIGN_CONTENT](state: S, option: ContentOptions): void;
  [MutationTypes.SET_ALIGN_ITEMS](state: S, option: AlignItemsOptions): void;
  [MutationTypes.ADD_ELEMENT](state: S): void;
  [MutationTypes.REMOVE_ELEMENT](state: S, payload: number): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.TOGGLE_WRAPPING](state) {
    state.wrapping = !state.wrapping;
  },
  [MutationTypes.TOGGLE_DIRECTION](state) {
    state.direction = !state.direction;
  },
  [MutationTypes.SET_JUSTIFY_CONTENT](state, option) {
    state.justifyContent = option;
  },
  [MutationTypes.SET_ALIGN_CONTENT](state, option) {
    state.alignContent = option;
  },
  [MutationTypes.SET_ALIGN_ITEMS](state, option) {
    state.alignItems = option;
  },
  [MutationTypes.ADD_ELEMENT](state) {
    const content = state.content;
    let lastElementId = 0;

    if (content.length !== 0) lastElementId = content[content.length - 1].id;

    content.push({ id: lastElementId + 1 });
  },
  [MutationTypes.REMOVE_ELEMENT](state, payload) {
    const content = state.content;
    state.content = content.filter((element) => element.id !== payload);
  },
};
