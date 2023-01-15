import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Discussion from "./components/Social/Discussions/Discussion";
import {Route, Routes} from "react-router-dom"
import React from "react";
import Anime from "./components/Anime/Anime";
import Music from "./components/Music/Music";
import Messages_Container from "./components/Social/Messages/Messages_Container";

const App = () => {
    return (
        <div className={'parent'}>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className={'app-content-wrapper'}>
                    <Routes>
                        <Route path={'/messages'}
                               element={<Messages_Container/>}
                        />
                        <Route path={'/discussions'}
                               element={<Discussion/>}
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