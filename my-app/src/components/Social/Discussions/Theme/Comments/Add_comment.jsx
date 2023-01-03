import classes from "./Comments.module.css";
import React from "react";
import {addCommentActionCreator, updateTextareaActionCreator} from "../../../../../redux/state";

const Add_comment = (props) => {
    let current_user = props.current_user()
    let new_post = React.createRef();


    let add_comment = () => {
        let text = new_post.current.value
        let comment_data = {
            "discussion_id": props.discussion_theme[0].id,
            "user_ava": props.discussion_theme[0].user_ava,
            "creator_name": props.discussion_theme[0].creator_name,
            "text": text,
        };
        let action = addCommentActionCreator(comment_data)
        props.dispatch(action)
        console.log(props.placeholder)
        textarea_change('Type here...')
    };


    let textarea_change = (base) => {
        let text = base ? base : new_post.current.value
        let action = updateTextareaActionCreator(text)
        props.dispatch(action)
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