import classes from './Dialog.module.css'
import React from "react";
import {updateTextareaActionCreator} from "../../../../redux/store";
import Message from "./Message/Message";
import {sendMessageActionCreator} from "../../../../redux/Message_Reducer";

const Dialog = (props) => {
    let current_user = props.currant_user()
    let new_message = React.createRef();
    // console.log(props.dialogs[0].messages[0].user_id)
    // console.log(current_user.id)
    let messages = (props.dialogs[0].messages.slice(0).reverse())
        .map(message => (<Message img={message.img}
                                  text={message.text}
                                  user_id={message.user_id}
                                  current_user_id={current_user.id}/>))


    let send_message = () => {
        let text = new_message.current.value
        let message_data = {
            "img": current_user.img,
            user_id: current_user.id,
            text: text
        }
        let action = sendMessageActionCreator(message_data)
        props.dispatch(action)
        console.log(text)
        textarea_change('Type here...')
    };

    let textarea_change = (base) => {
        let text = base ? base : new_message.current.value
        let action = updateTextareaActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div>
            <div className={classes.add_message}>
            <textarea className={classes.text_area}
                      ref={new_message}
                      onChange={() => textarea_change()}
                      value={props.placeholder}/>
                <img className={classes.user_ava}
                     src={current_user.img}
                     alt="avatar"/>
                <button
                    className={classes.button}
                    onClick={() => send_message()}>
                    Send
                </button>
            </div>
            {messages}
        </div>
    )
}

export default Dialog