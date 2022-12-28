import classes from "./Comments.module.css";
import React from "react";

const Add_comment = (props) => {
    let current_user = props.dispatch({type: "CURRENT-USER"})
    let new_post = React.createRef();


    let add_post = () => {
        let text = new_post.current.value
        let comment_data = {
            "discussion_id": props.discussion_theme[0].id,
            "user_ava": props.discussion_theme[0].user_ava,
            "creator_name": props.discussion_theme[0].creator_name,
            "text": text,
        };
        props.dispatch({type: "ADD-COMMENT", obj: comment_data})
        console.log(props.placeholder)
        textarea_change('Type here...')
    };


    let textarea_change = (base) => {
        let text = base ? base : new_post.current.value
        props.dispatch({type: "UPDATE-TEXTAREA", text: text})
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
            <button onClick={() => add_post()}
                    className={classes.button}>
                Post
            </button>
        </div>
    )
}

export default Add_comment