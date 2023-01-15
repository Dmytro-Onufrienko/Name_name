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
    dialogs: [
        {
            id: 1, name: 'sadboy', messages: [
                {'id': 1, "img": 'avatars/sadboy_avatar.png', user_id: 1, text: 'hi'},
                {'id': 2, "img": 'avatars/cyber_girl.jpg', user_id: 5, text: 'hi'},
                {'id': 3, "img": 'avatars/cyber_girl.jpg', user_id: 5, text: 'know u?'},
                {'id': 4, "img": 'avatars/sadboy_avatar.png', user_id: 1, text: 'yep'},
                {'id': 5, "img": 'avatars/sadboy_avatar.png', user_id: 1, text: 'not nigga'},
                {'id': 6, "img": 'avatars/cyber_girl.jpg', user_id: 5, text: 'oh'},
                {'id': 7, "img": 'avatars/sadboy_avatar.png', user_id: 1, text: 'good'},
            ],
        },
        {
            id: 2, name: 'sadgirl', messages: [
                {id: 1, user_name: 2, text: 'hi'},
                {id: 2, user_name: 5, text: 'hi'},
                {id: 3, user_name: 5, text: 'know u?'},
                {id: 4, user_name: 2, text: 'yep'},
                {id: 5, user_name: 2, text: 'not nigga'},
                {id: 6, user_name: 5, text: 'oh'},
                {id: 7, user_name: 2, text: 'good'},
            ],
        },
        {
            id: 3, name: 'girl2', messages: [
                {id: 1, user_name: 3, text: 'hi'},
                {id: 2, user_name: 5, text: 'hi'},
                {id: 3, user_name: 5, text: 'know u?'},
                {id: 4, user_name: 3, text: 'yep'},
                {id: 5, user_name: 3, text: 'not nigga'},
                {id: 6, user_name: 5, text: 'oh'},
                {id: 7, user_name: 3, text: 'good'},
            ],
        },
    ],
    message_placeholder: 'Type here...',
    currentUser: {id: 5, name: "Zen", "img": 'avatars/cyber_girl.jpg'}
}


const message_reducer = (global_state = initialState, action) => {
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



export default message_reducer