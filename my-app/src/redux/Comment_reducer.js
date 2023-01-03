const comment_reducer = (state, action) => {
    switch (action.type) {
        case "ADD-COMMENT":
            const new_comment = {
                "id": state.comments_data.length + 1,
                "discussions_id": action.obj.discussion_id,
                "name": action.obj.creator_name,
                "img": action.obj.user_ava,
                "text": action.obj.text,

            }
            state.comments_data.push(new_comment)
            return state;
        case "UPDATE-TEXTAREA":
            state.placeholder = action.text
            return state;
        default:
            return state
    }

}

export default comment_reducer