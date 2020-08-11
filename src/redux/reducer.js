const initialState = {
    messages: [],
    greeting: 'Hello World!'
}
const ADD_MESSAGE = "ADD_MESSAGE";

//action creator function
export function addMessage(val){
    return {
        type: ADD_MESSAGE,
        payload: val
    }
}


export default function reducer(state = initialState, action){
    switch(action.type){
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages, action.payload]}
        default:
            return state;
        
    }
}