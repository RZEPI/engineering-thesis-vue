import { ActionTree, ActionContext } from "vuex";
import { State } from ".";
import { Mutations, MutationTypes } from "./mutations";
import { AlignItemsOptions } from "../../models/flexbox-generator/AlignItemsOptions";
import { ContentOptions } from "../../models/flexbox-generator/ContentOptions";

export enum ActionTypes {
  TOGGLE_OPTION = "toggleOption",
  SET_ALIGN_ITEMS = "setAlignItems",
  SET_ALIGN_CONTENT = "setAlignContent",
  SET_JUSTIFY_CONTENT = "setJustifyContent",
  ADD_ELEMENT = "addElement",
  REMOVE_ELEMENT = "removeElement",
}

type AugmentedActionContex = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.TOGGLE_OPTION](
    { commit }: AugmentedActionContex,
    payload: "wrap" | "direction",
  ): void;
  [ActionTypes.SET_ALIGN_ITEMS](
    { commit }: AugmentedActionContex,
    payload: AlignItemsOptions,
  ): void;
  [ActionTypes.SET_JUSTIFY_CONTENT](
    { commit }: AugmentedActionContex,
    payload: ContentOptions,
  ): void;
  [ActionTypes.SET_ALIGN_CONTENT](
    { commit }: AugmentedActionContex,
    payload: ContentOptions,
  ): void;
  [ActionTypes.ADD_ELEMENT]({ commit }: AugmentedActionContex): void;
  [ActionTypes.REMOVE_ELEMENT](
    { commit }: AugmentedActionContex,
    payload: number,
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.TOGGLE_OPTION]({ commit }, payload) {
    let mutation: MutationTypes = MutationTypes.TOGGLE_WRAPPING;
    if (payload === "direction") mutation = MutationTypes.TOGGLE_DIRECTION;

    commit(mutation, undefined);
  },
  [ActionTypes.SET_JUSTIFY_CONTENT]({ commit }, payload) {
    commit(MutationTypes.SET_JUSTIFY_CONTENT, payload);
  },
  [ActionTypes.SET_ALIGN_ITEMS]({ commit }, payload) {
    commit(MutationTypes.SET_ALIGN_ITEMS, payload);
  },
  [ActionTypes.SET_ALIGN_CONTENT]({ commit }, payload) {
    commit(MutationTypes.SET_ALIGN_CONTENT, payload);
  },
  [ActionTypes.ADD_ELEMENT]({ commit }) {
    commit(MutationTypes.ADD_ELEMENT, undefined);
  },
  [ActionTypes.REMOVE_ELEMENT]({ commit }, payload) {
    commit(MutationTypes.REMOVE_ELEMENT, payload);
  },
};
