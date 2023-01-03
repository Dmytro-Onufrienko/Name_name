const SEND_MESSAGE = "SEND-MESSAGE";

const message_reducer = (state, action) => {
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


export default message_reducer