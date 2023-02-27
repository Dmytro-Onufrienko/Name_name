const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_TEXTAREA = "UPDATE-TEXTAREA";


let initialState = {
    users: [
        {id: 1, name: "sadboy", "img": 'avatars/sadboy_avatar.png'},
        {id: 2, name: "sadgirl", "img": 'avatars/sadgirl_avatar.jpg'},
        {id: 3, name: "girl2", "img": 'avatars/girl2.jpg'},
        {id: 4, name: "girl3", "img": 'avatars/girl3.jpg'},
        {id: 5, name: "Zen", "img": 'avatars/cyber_girl.jpg'},
    ],
    currentUser: {id: 5, name: "Zen", "img": 'avatars/cyber_girl.jpg'}
}


const users_reducer = (global_state = initialState, action) => {
    let state;
    switch (action.type) {
        case "UPDATE-TEXTAREA":
            return {
                ...global_state,
                message_placeholder: action.text
            }
        case "SEND-MESSAGE":
            const new_message = {
                'id': global_state.dialogs[0].messages.length + 1,
                "img": global_state.currentUser.img,
                'user_id': global_state.currentUser.id,
                text: action.text
            }
            state = {
                ...global_state,
                message_placeholder: 'Type here...'
            }
            state.dialogs[0].messages = [...global_state.dialogs[0].messages, new_message]
            return state;
        default:
            return global_state
    }
}

export let sendMessageActionCreator = (text) => {
    return {type: SEND_MESSAGE, text: text}
}
export let updateTextareaActionCreator = (text) => {
    return {type: UPDATE_TEXTAREA, text: text}
}



export default users_reducer