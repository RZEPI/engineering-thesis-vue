import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store as VuexStore } from "vuex";

import { mutations } from "./mutations";
import { actions } from "./actions";
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
};

const DefaultContent: FlexboxElement[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

export const state: State = {
    wrapping: false,
    direction: false,
    justifyContent: ContentOptions.CENTER,
    alignItems: AlignItemsOptions.CENTER,
    alignContent: ContentOptions.CENTER,
    content: DefaultContent,
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