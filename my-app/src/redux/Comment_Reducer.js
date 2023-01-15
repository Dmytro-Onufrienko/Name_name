const ADD_COMMENT = "ADD-COMMENT";
const UPDATE_TEXTAREA = "UPDATE-TEXTAREA";


let initialState = {
    users: [
        {id: 1, name: "sadboy", "img": 'avatars/sadboy_avatar.png'},
        {id: 2, name: "sadgirl", "img": 'avatars/sadgirl_avatar.jpg'},
        {id: 3, name: "girl2", "img": 'avatars/girl2.jpg'},
        {id: 4, name: "girl3", "img": 'avatars/girl3.jpg'},
        {id: 5, name: "Zen", "img": 'avatars/cyber_girl.jpg'},
    ],
    discussion_theme: [
        {
            "id": 1,
            "user_ava": 'avatars/cyber_girl.jpg',
            "creator_name": "Zen",
            "text": "Guys, what do you think about chainsawman? Is it worth it to watch?"
        }
    ],
    comments_data: [
        {
            "id": 1,
            "discussion_id": 1,
            "name": "sadboy",
            "img": 'avatars/sadboy_avatar.png',
            "text": 'Chainsawman is the best!'
        },
        {
            "id": 2,
            "discussion_id": 1,
            "name": "sadgirl",
            "img": 'avatars/sadgirl_avatar.jpg',
            "text": 'Makima is so cute'
        },
        {
            "id": 3,
            "discussion_id": 1,
            "name": "girl2",
            "img": 'avatars/girl2.jpg',
            "text": 'Episode 10 was a lil bit boring :('
        },
        {
            "id": 4,
            "discussion_id": 1,
            "name": "girl3",
            "img": 'avatars/girl3.jpg',
            "text": 'Episode 11 is out now!!!!! im so exited! Wanna watch it now!!'
        },
    ],
    placeholder: 'Type here...',
    currentUser: {id: 5, name: "Zen", "img": 'avatars/cyber_girl.jpg'}
}


const comment_reducer = (global_state = initialState, action) => {
    let state = JSON.parse(JSON.stringify(global_state))
    switch (action.type) {
        case "ADD-COMMENT":
            const new_comment = {
                "id": state.comments_data.length + 1,
                "discussions_id": state.discussion_theme[0].id,
                "name": state.currentUser.name,
                "img": state .currentUser.img,
                "text": action.text,
            }
            state.comments_data.push(new_comment)
            state.placeholder = 'Type here...'
            return state
        case "UPDATE-TEXTAREA":
            state.placeholder = action.text
            return state;
        default:
            return state
    }
}


export let addCommentActionCreator = (text) => {
    return {type: ADD_COMMENT, text: text}
}
export let updateTextareaActionCreator = (text) => {
    return {type: UPDATE_TEXTAREA, text: text}
}

export default comment_reducer