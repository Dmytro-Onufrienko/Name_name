import classes from "./Comments.module.css";
import React from "react";

const Add_comment = (props) => {
    let current_user = props.current_user
    let new_post = React.createRef();


    let add_comment = () => {
        let text = new_post.current.value
        props.addComment(text)
    };


    let textarea_change = (base) => {
        let text = base ? base : new_post.current.value
        props.textareaChange(text)
    }


    return (
        <div className={classes.add_comment}>
            <textarea ref={new_post}
                      onChange={() => textarea_change()}
                      value={props.placeholder}
                      className={classes.text_area}/>
            <img className={classes.user_ava}
                 src={current_user.img}
                 alt="avatar"/>
            <button onClick={() => add_comment()}
                    className={classes.button}>
                Post
            </button>
        </div>
    )
}

export default Add_comment