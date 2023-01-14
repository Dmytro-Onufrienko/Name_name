import React from "react";
import {addCommentActionCreator, updateTextareaActionCreator} from "../../../../../redux/Comment_Reducer";
import Add_comment from "./Add_comment";
import StoreContext from "../../../../../StoreContext";

const Add_comment_Container = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let add_comment = (text) => {
                        let comment_data = {
                            "discussion_id": store.getState().DiscussionPage.discussion_theme[0].id,
                            "user_ava": store.getState().DiscussionPage.discussion_theme[0].user_ava,
                            "creator_name": store.getState().DiscussionPage.discussion_theme[0].creator_name,
                            "text": text,
                        };
                        let action = addCommentActionCreator(comment_data)
                        store.dispatch(action)
                        textarea_change('Type here...')
                    };


                    let textarea_change = (text) => {
                        let action = updateTextareaActionCreator(text)
                        store.dispatch(action)
                    }


                    return <Add_comment addComment={add_comment} textareaChange={textarea_change}
                                 placeholder={store.getState().DiscussionPage.placeholder}
                                 current_user={store.getState().DiscussionPage.currentUser}
                    />
                }
            }
        </StoreContext.Consumer>

    )
}

export default Add_comment_Container