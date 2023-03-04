let initialState = {
    users: [
        {id: 1, name: "sadboy", "img": 'avatars/sadboy_avatar.png'},
        {id: 2, name: "sadgirl", "img": 'avatars/sadgirl_avatar.jpg'},
        {id: 3, name: "girl2", "img": 'avatars/girl2.jpg'},
        {id: 4, name: "girl3", "img": 'avatars/girl3.jpg'},
        {id: 5, name: "Zen", "img": 'avatars/cyber_girl.jpg'},
    ],
    currentUser: {id: 5, name: "Zen", "img": 'avatars/cyber_girl.jpg'}
}


const users_reducer = (global_state = initialState, action) => {
    let state;
    switch (action.type) {
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return global_state
    }
}

export let setUsersActionCreator = (users) => {
    return {type: 'SET-USERS', users}
}


export default users_reducer