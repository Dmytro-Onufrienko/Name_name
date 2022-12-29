const ADD_COMMENT = "ADD-COMMENT";
const UPDATE_TEXTAREA = "UPDATE-TEXTAREA";
const SEND_MESSAGE = "SEND-MESSAGE";


let store = {
    _state: {
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
        dialogs: [
            {
                id: 1, name: 'sadboy', messages: [
                    {'id': 1, "img": 'avatars/sadboy_avatar.png', user_id: 1, text: 'hi'},
                    {'id': 2, "img": 'avatars/cyber_girl.jpg', user_id: 5, text: 'hi'},
                    {'id': 3, "img": 'avatars/cyber_girl.jpg', user_id: 5, text: 'know u?'},
                    {'id': 4, "img": 'avatars/sadboy_avatar.png', user_id: 1, text: 'yep'},
                    {'id': 5, "img": 'avatars/sadboy_avatar.png', user_id: 1, text: 'not nigga'},
                    {'id': 6, "img": 'avatars/cyber_girl.jpg', user_id: 5, text: 'oh'},
                    {'id': 7, "img": 'avatars/sadboy_avatar.png', user_id: 1, text: 'good'},
                ],
            },
            {
                id: 2, name: 'sadgirl', messages: [
                    {id: 1, user_name: 2, text: 'hi'},
                    {id: 2, user_name: 5, text: 'hi'},
                    {id: 3, user_name: 5, text: 'know u?'},
                    {id: 4, user_name: 2, text: 'yep'},
                    {id: 5, user_name: 2, text: 'not nigga'},
                    {id: 6, user_name: 5, text: 'oh'},
                    {id: 7, user_name: 2, text: 'good'},
                ],
            },
            {
                id: 3, name: 'girl2', messages: [
                    {id: 1, user_name: 3, text: 'hi'},
                    {id: 2, user_name: 5, text: 'hi'},
                    {id: 3, user_name: 5, text: 'know u?'},
                    {id: 4, user_name: 3, text: 'yep'},
                    {id: 5, user_name: 3, text: 'not nigga'},
                    {id: 6, user_name: 5, text: 'oh'},
                    {id: 7, user_name: 3, text: 'good'},
                ],
            },
        ],
        placeholder: 'Type here...',
    },
    getState() {
        return this._state
    },
    _render_entire_tree() {
        console.log('State is changed')
    },
    subscriber(observer) {
        this._render_entire_tree = observer
    },

    dispatch(action) {
        if (action.type === "ADD-COMMENT") {
            const new_comment = {
                "id": this.getState().comments_data.length + 1,
                "discussions_id": action.obj.discussion_id,
                "name": action.obj.creator_name,
                "img": action.obj.user_ava,
                "text": action.obj.text,

            }
            this._state.comments_data.push(new_comment)
            this._render_entire_tree(this._state)
        }
        if (action.type === "UPDATE-TEXTAREA") {
            this._state.placeholder = action.text
            this._render_entire_tree(this._state)
        }
        if (action.type === "CURRENT-USER") {
            return this._state.users[4]
        }
        if (action.type === "SEND-MESSAGE") {
            const new_message = {
                'id': this.getState().dialogs[0].messages.length + 1,
                "img": action.message_data.img,
                user_id: action.message_data.user_id,
                text: action.message_data.text
            }
            this._state.dialogs[0].messages.push(new_message)
        }
    },
}

export let updateTextareaActionCreator = (text) => {
    return {type: UPDATE_TEXTAREA, text: text}
}

export let addCommentActionCreator = (comment_data) => {
    return {type: ADD_COMMENT, obj: comment_data}
}

export  let sendMessageActionCreator = (message_data) => {
    return {type: SEND_MESSAGE, message_data: message_data}
}


window.store = store
export default store