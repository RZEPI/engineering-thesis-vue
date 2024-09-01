import { MutationTree } from "vuex";
import { AlignItemsOptions } from "../../models/flexbox-generator/AlignItemsOptions";
import { JustifyContentOptions } from "../../models/flexbox-generator/JustifyContentOptions";

import { State } from ".";
export enum MutationTypes {
    TOGGLE_WRAPPING = 'toggleWrapping',
    TOGGLE_DIRECTION = 'toggleDirection',
    SET_JUSTIFY_CONTENT = 'setJustifyContnent',
    SET_ALIGN_ITEMS = 'setAlignItems'
}

export type Mutations<S = State> = {
    [MutationTypes.TOGGLE_WRAPPING](state: S) : void
    [MutationTypes.TOGGLE_DIRECTION](state: S) : void
    [MutationTypes.SET_JUSTIFY_CONTENT](state: S, option: JustifyContentOptions) : void
    [MutationTypes.SET_ALIGN_ITEMS](state: S, option: AlignItemsOptions) : void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.TOGGLE_WRAPPING](state){
        state.wrapping = !state.wrapping;
    },
    [MutationTypes.TOGGLE_DIRECTION](state){
        state.direction = !state.direction;
    },
    [MutationTypes.SET_JUSTIFY_CONTENT](state, option){
        state.justifyContent = option;
    },
    [MutationTypes.SET_ALIGN_ITEMS](state, option){
        state.alignItems = option;
    }
}