export default function(state, action) {
    if (state === undefined) {
        return []
    }
    switch (action.type) {
        case 'FETCH_MESSAGES':
            return action.payload.messages;;
        case 'MESSAGE_POSTED':
            const copiedState = state.slice(0);
            copiedState.push(action.payload);
            return copiedState;
        default:
            return state;
    }
}