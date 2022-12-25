import classes from "./Comments.module.css";
import React from "react";

const Add_comment = (props) => {
    let new_post = React.createRef();
    let add_post = () => {
        let text = new_post.current.value
        // alert('You shit-posted!\n"but i still love u"\n'+text)
        let comment_data = {
            "discussion_id": props.discussion_theme[0].id,
            "user_ava": props.discussion_theme[0].user_ava,
            "creator_name": props.discussion_theme[0].creator_name,
            "text": text,
        }
        props.add_comment(comment_data)
    }


    return (
        <div className={classes.add_comment}>
            <textarea ref={new_post}
                placeholder={'Type here.........'}
                className={classes.text_area}>
            </textarea>
            <img className={classes.user_ava}
                src={`${props.discussion_theme[0].user_ava}`}
                alt="avatar"/>
            <button onClick={() => add_post()}
                    className={classes.button}>
                Post
            </button>
        </div>
    )
}

export default Add_comment