import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store as VuexStore } from "vuex";

import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";
import { AlignItemsOptions } from "../../models/flexbox-generator/AlignItemsOptions";
import { JustifyContentOptions } from "../../models/flexbox-generator/JustifyContentOptions";
import { FlexboxElement } from "../../models/flexbox-generator/FlexboxElement";

export interface State {
    wrapping: boolean;
    direction: boolean;
    justifyContent: JustifyContentOptions
    alignItems: AlignItemsOptions
    content: FlexboxElement[]
};

export const state: State = {
    wrapping: false,
    direction: false,
    justifyContent: JustifyContentOptions.CENTER,
    alignItems: AlignItemsOptions.CENTER,
    content: [{ id: 1 }, { id: 2 }, { id: 3 }],
}

export const key: InjectionKey<VuexStore<State>> = Symbol();

export const store = createStore<State>({
    state,
    getters,
    actions,
    mutations
})

export function useStore() {
    return baseUseStore(key)
}