import message_reducer from "./Message_Reducer";
import comment_Reducer from "./Comment_Reducer";


let store = {
    _state: {
        DiscussionPage: {
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
        },
        MessagePage: {
            users: [
                {id: 1, name: "sadboy", "img": 'avatars/sadboy_avatar.png'},
                {id: 2, name: "sadgirl", "img": 'avatars/sadgirl_avatar.jpg'},
                {id: 3, name: "girl2", "img": 'avatars/girl2.jpg'},
                {id: 4, name: "girl3", "img": 'avatars/girl3.jpg'},
                {id: 5, name: "Zen", "img": 'avatars/cyber_girl.jpg'},
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
            currentUser: {id: 5, name: "Zen", "img": 'avatars/cyber_girl.jpg'}
        },
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
        this._state = comment_Reducer(this._state, action)
        this._state = message_reducer(this._state, action)
        this._render_entire_tree(this._state)
    },
}


window.store = store
export default store