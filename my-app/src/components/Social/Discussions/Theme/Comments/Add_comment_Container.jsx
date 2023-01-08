import React from "react";
import {addCommentActionCreator, updateTextareaActionCreator} from "../../../../../redux/Comment_Reducer";
import Add_comment from "./Add_comment";

const Add_comment_Container = (props) => {
    let add_comment = (text) => {
        let comment_data = {
            "discussion_id": props.store.discussion_theme[0].id,
            "user_ava": props.store.discussion_theme[0].user_ava,
            "creator_name": props.store.discussion_theme[0].creator_name,
            "text": text,
        };
        let action = addCommentActionCreator(comment_data)
        props.dispatch(action)
        console.log(props.store.placeholder)
        textarea_change('Type here...')
    };


    let textarea_change = (text) => {
        let action = updateTextareaActionCreator(text)
        props.dispatch(action)
    }


    return (
        <Add_comment addComment={add_comment} textareaChange={textarea_change}
                     placeholder={props.store.placeholder}
                     current_user={props.store.currentUser}
        />
    )
}

export default Add_comment_Container