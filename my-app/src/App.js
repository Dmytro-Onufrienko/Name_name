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
                               element={<Messages store={props.state.MessagePage}
                                                  dispatch={props.dispatch}
                               />}
                        />
                        <Route path={'/discussions'}
                               element={<Discussion store={props.state.DiscussionPage}
                                                    dispatch={props.dispatch}
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