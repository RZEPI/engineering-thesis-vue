import {State} from ".";
import { CSSProperties } from "vue";

export type Getters = {
    getStyleObject(state:State): CSSProperties
}

export const getters: Getters = {
    getStyleObject(state)
    {
        return {
            'flex-wrap': state.wrapping ? 'wrap' : 'nowrap',
            'flex-direction': state.direction ? 'column' : 'row',
            'justify-content': state.justifyContent  as string,
            'align-items': state.alignItems as string
        }
    }
}