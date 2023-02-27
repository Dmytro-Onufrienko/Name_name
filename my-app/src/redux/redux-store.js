import { combineReducers, legacy_createStore as createStore } from "redux";
import comment_reducer from "./Comment_Reducer";
import message_reducer from "./Message_Reducer";
import users_reducer from "./Users_Reducer";


let reducers = combineReducers({
    DiscussionPage: comment_reducer,
    MessagePage: message_reducer,
    UsersPage: users_reducer
})


let store = createStore(reducers)

window.store = store

export default store