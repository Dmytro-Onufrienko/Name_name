import React from "react";
import {sendMessageActionCreator, updateTextareaActionCreator} from "../../../../redux/Message_Reducer";
import Dialog from "./Dialog";

const Dialog_Container = (props) => {
    let current_user = props.store.currentUser


    let send_message = (text) => {
        let message_data = {
            "img": current_user.img,
            user_id: current_user.id,
            text: text
        }
        let action = sendMessageActionCreator(message_data)
        props.dispatch(action)
        textarea_change('Type here...')
    };

    let textarea_change = (text) => {
        let action = updateTextareaActionCreator(text)
        props.dispatch(action)
    }

    return (
        <Dialog textareaChange={textarea_change} sendMessage={send_message}
                users={props.store.users}
                dialogs={props.store.dialogs}
                placeholder={props.store.placeholder}
                current_user={props.store.currentUser}
        />
    )
}

export default Dialog_Container