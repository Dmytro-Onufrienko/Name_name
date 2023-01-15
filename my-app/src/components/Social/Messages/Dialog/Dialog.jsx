import classes from './Dialog.module.css'
import React from "react";
import Message from "./Message/Message";

const Dialog = (props) => {
    let current_user = props.current_user
    let new_message = React.createRef();
    let messages = (props.dialogs[0].messages.slice(0).reverse())
        .map(message => (<Message img={message.img}
                                  text={message.text}
                                  key={message.id}
                                  user_id={message.user_id}
                                  current_user_id={current_user.id}/>))


    let send_message = () => {
        let text = new_message.current.value
        props.send_message(text)
    };

    let textarea_change = (base) => {
        let text = base ? base : new_message.current.value
        props.textarea_change(text)
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