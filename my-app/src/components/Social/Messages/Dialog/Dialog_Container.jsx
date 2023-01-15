import React from "react";
import {sendMessageActionCreator, updateTextareaActionCreator} from "../../../../redux/Message_Reducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users: state.MessagePage.users,
        dialogs: state.MessagePage.dialogs,
        placeholder: state.MessagePage.message_placeholder,
        current_user: state.MessagePage.currentUser
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        textarea_change: (text) => {
            dispatch(updateTextareaActionCreator(text))
        },
        send_message: (text) => {
            dispatch(sendMessageActionCreator(text))
        },
    }
}


const Dialog_container = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default Dialog_container
