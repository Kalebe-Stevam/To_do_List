const INITIAL_VALUES = {
    items: []
}
export default function Values(state = INITIAL_VALUES, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items: [...state.items,
                {
                    id: Math.random(),
                    value: action.value
                }
                ]

            }
        case "DELET_ITEM":
            let newList = [...state.items]
            newList.splice(action.index, 1)
            return {
                ...state,
                items: [...newList]
            }
        default:
            return state
    }
}