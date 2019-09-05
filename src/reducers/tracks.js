
const initialState = [];

const tracks = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TRACK':
            return [
                ...state,
                action.payload
            ]
        case 'DELETE_TRACK':
            return [
                state
            ]
        default:
            return state;
    }
}
export default tracks;