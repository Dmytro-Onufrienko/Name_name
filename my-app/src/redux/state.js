let store = {
    _state: {
        users: [
            {"id": 1, "name": "sadboy", "img": 'avatars/sadboy_avatar.png'},
            {"id": 2, "name": "sadgirl", "img": 'avatars/sadgirl_avatar.jpg'},
            {"id": 3, "name": "girl2", "img": 'avatars/girl2.jpg'},
            {"id": 4, "name": "girl3", "img": 'avatars/girl3.jpg'},
            {"id": 5, "name": "Zen", "img": 'avatars/cyber_girl.jpg'},
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
            console.log(this._state)
            this._render_entire_tree(this._state)
        }
        if (action.type === "UPDATE-TEXTAREA") {
            this._state.placeholder = action.text
            this._render_entire_tree(this._state)
        }
        if (action.type === "CURRENT-USER") {return this._state.users[4]}
    }

}


window.store = store
export default store