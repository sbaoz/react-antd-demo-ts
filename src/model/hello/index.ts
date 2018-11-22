import * as Immutable from 'immutable'

export const hello = {
    state: {
        name: '',
        num: 0
    },
    reducers: {
        setName(state: any, {name}: any) {
            return {
                ...state,
                name
            }
        },
        setNum(state: any, {num}: any) {
            return {
                ...state,
                num
            }
        }
    },
    effects: { }
}
