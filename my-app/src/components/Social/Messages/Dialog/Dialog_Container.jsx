import React from "react";
import {sendMessageActionCreator, updateTextareaActionCreator} from "../../../../redux/Message_Reducer";
import Dialog from "./Dialog";
import StoreContext from "../../../../StoreContext";

const Dialog_Container = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let current_user = store.getState().MessagePage.currentUser
                    let send_message = (text) => {
                        let message_data = {
                            "img": current_user.img,
                            user_id: current_user.id,
                            text: text
                        }
                        let action = sendMessageActionCreator(message_data)
                        store.dispatch(action)
                        textarea_change('Type here...')
                    };

                    let textarea_change = (text) => {
                        let action = updateTextareaActionCreator(text)
                        store.dispatch(action)
                    }


                    return <Dialog textareaChange={textarea_change} sendMessage={send_message}
                                   users={store.getState().MessagePage.users}
                                   dialogs={store.getState().MessagePage.dialogs}
                                   placeholder={store.getState().MessagePage.placeholder}
                                   current_user={store.getState().MessagePage.currentUser}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default Dialog_Container