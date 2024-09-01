import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store as VuexStore}  from "vuex";

import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";
import { AlignItemsOptions } from "../../models/flexbox-generator/AlignItemsOptions";
import { JustifyContentOptions } from "../../models/flexbox-generator/JustifyContentOptions";

export interface State{
    wrapping: boolean;
    direction: boolean;
    justifyContent: JustifyContentOptions
    alignItems: AlignItemsOptions
};

export const state: State = {
    wrapping: false,
    direction: false,
    justifyContent: JustifyContentOptions.CENTER,
    alignItems: AlignItemsOptions.CENTER
}

export const key: InjectionKey<VuexStore<State>> = Symbol();

export const store = createStore<State>({
    state,
    getters,
    actions,
    mutations
})

export function useStore(){
    return baseUseStore(key)
}