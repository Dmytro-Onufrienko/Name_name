import classes from './Dialog.module.css'
import React from "react";

const Dialog = (props) => {
    let current_user = props.current_user()
    let new_message = React.createRef();


    let send_message = () => {
        let text = new_message.current.value
        console.log(props.placeholder)
        textarea_change('Type here...')
    };


    let textarea_change = (base) => {
        let text = base ? base : new_message.current.value
        props.update_textarea(text)
    }


    return (
        <div className={classes.add_comment}>
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
    )
}

export default Dialog