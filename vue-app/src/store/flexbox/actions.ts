import { ActionTree, ActionContext } from "vuex"
import { State } from "."
import { Mutations, MutationTypes } from "./mutations"
import { AlignItemsOptions } from "../../models/flexbox-generator/AlignItemsOptions"
import { JustifyContentOptions } from "../../models/flexbox-generator/JustifyContentOptions"

export enum ActionTypes {
    TOGGLE_OPTION = 'toggleOption',
    SET_ALIGN_ITEMS = 'setAlignItems',
    SET_JUSTIFY_CONTENT = 'setJustifyContent'
}

type AugmentedActionContex = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
    [ActionTypes.TOGGLE_OPTION](
        { commit }: AugmentedActionContex,
        payload: "wrap" | "direction"
    ): void
    [ActionTypes.SET_ALIGN_ITEMS](
        { commit }: AugmentedActionContex,
        payload: AlignItemsOptions
    ): void
    [ActionTypes.SET_JUSTIFY_CONTENT](
        { commit }: AugmentedActionContex,
        payload: JustifyContentOptions
    ): void
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.TOGGLE_OPTION]({ commit }, payload) {
        let mutation: MutationTypes = MutationTypes.TOGGLE_WRAPPING;
        if (payload === "direction")
            mutation = MutationTypes.TOGGLE_DIRECTION;

        commit(mutation, undefined)
    },
    [ActionTypes.SET_JUSTIFY_CONTENT]({commit}, payload){
        commit(MutationTypes.SET_JUSTIFY_CONTENT, payload)
    },
    [ActionTypes.SET_ALIGN_ITEMS]({commit}, payload)
    {
        commit(MutationTypes.SET_ALIGN_ITEMS, payload)
    }

}
