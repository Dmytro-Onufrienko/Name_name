import React from "react";
import {addCommentActionCreator, updateTextareaActionCreator} from "../../../../../../redux/Comment_Reducer";
import Add_Comment from "./Add_Comment";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        placeholder: state.DiscussionPage.comment_placeholder,
        current_user: state.DiscussionPage.currentUser
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        textareaChange: (text) => {
            dispatch(updateTextareaActionCreator(text))
        },
        addComment: (text) => {
            dispatch(addCommentActionCreator(text))
        },

    }
}


const Add_Comment_Container = connect(mapStateToProps, mapDispatchToProps)(Add_Comment);



export default Add_Comment_Container