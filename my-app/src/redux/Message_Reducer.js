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
    placeholder: 'Type here...',
    currentUser: {id: 5, name: "Zen", "img": 'avatars/cyber_girl.jpg'}
}


const message_reducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE-TEXTAREA":
            state.placeholder = action.text
            return state;
        case "SEND-MESSAGE":
            const new_message = {
                'id': state.dialogs[0].messages.length + 1,
                "img": action.message_data.img,
                user_id: action.message_data.user_id,
                text: action.message_data.text
            }
            state.dialogs[0].messages.push(new_message)
            return state;
        default:
            return state
    }
}


export let sendMessageActionCreator = (message_data) => {
    return {type: SEND_MESSAGE, message_data: message_data}
}
export let updateTextareaActionCreator = (text) => {
    return {type: UPDATE_TEXTAREA, text: text}
}

export default message_reducer