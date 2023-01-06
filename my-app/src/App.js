import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Discussion from "./components/Social/Discussions/Discussion";
import Messages from "./components/Social/Messages/Messages";
import {Route, Routes} from "react-router-dom"
import React from "react";
import Anime from "./components/Anime/Anime";
import Music from "./components/Music/Music";

const App = (props) => {
    return (
        <div className={'parent'}>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className={'app-content-wrapper'}>
                    <Routes>
                        <Route path={'/messages'}
                               element={<Messages users={props.state.MessagePage.users}
                                                  dialogs={props.state.MessagePage.dialogs}
                                                  dispatch={props.dispatch}
                                                  placeholder={props.state.MessagePage.placeholder}
                                                  current_user={props.state.MessagePage.currentUser}
                               />}
                        />
                        <Route path={'/discussions'}
                               element={<Discussion
                                   discussion_theme={props.state.DiscussionPage.discussion_theme}
                                   comments_data={props.state.DiscussionPage.comments_data}
                                   placeholder={props.state.DiscussionPage.placeholder}
                                   dispatch={props.dispatch}
                                   current_user={props.state.DiscussionPage.currentUser}
                               />}
                        />
                        <Route path={'/anime'}
                               element={<Anime/>}
                        />
                        <Route path={'/music'}
                               element={<Music/>}
                        />
                    </Routes>
                </div>
            </div>
        </div>
    );
}


export default App;
// export default Header;