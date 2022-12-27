let store = {
    _state: {
        users: [
            {"id": 1, "name": "sadboy", "img": 'avatars/sadboy_avatar.png'},
            {"id": 2, "name": "sadgirl", "img": 'avatars/sadgirl_avatar.jpg'},
            {"id": 3, "name": "girl2", "img": 'avatars/girl2.jpg'},
            {"id": 4, "name": "girl3", "img": 'avatars/girl3.jpg'},
        ],
        discussion_theme: [
            {
                "id": 1, "user_ava": 'avatars/cyber_girl.jpg', "creator_name": "Zen", "text": "Guys, what do you think about chainsawman? Is it worth it to watch?"
            }
        ],
        comments_data: [
            {"id": 1, "discussion_id": 1, "name": "sadboy", "img":  'avatars/sadboy_avatar.png', "text": 'Chainsawman is the best!'},
            {"id": 2, "discussion_id": 1, "name": "sadgirl", "img": 'avatars/sadgirl_avatar.jpg', "text": 'Makima is so cute'},
            {"id": 3, "discussion_id": 1, "name": "girl2", "img": 'avatars/girl2.jpg', "text": 'Episode 10 was a lil bit boring :('},
            {"id": 4, "discussion_id": 1, "name": "girl3", "img": 'avatars/girl3.jpg', "text": 'Episode 11 is out now!!!!! im so exited! Wanna watch it now!!'},
        ],
        new_post_text: 'Type here...',
    },
    getState() {
        return this._state
    },
    _render_entire_tree() {
        console.log('State is changed')
    },
    add_comment (postMessage) {
        const new_comment = {
            "id": this.getState().comments_data.length+1,
            "discussions_id": postMessage.discussion_id,
            "name": postMessage.creator_name,
            "img": postMessage.user_ava,
            "text": postMessage.text,

        }
        this._state.comments_data.push(new_comment)
        console.log(this._state)
        this._render_entire_tree(this._state)
    },
    update_post_text (text) {
        this._state.new_post_text = text
        this._render_entire_tree(this._state)
    },
    subscriber (observer) {
        this._render_entire_tree = observer
    },
}


window.store = store
export default store