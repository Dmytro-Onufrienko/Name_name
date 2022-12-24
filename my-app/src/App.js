import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Discussion from "./components/Social/Discussions/Discussion";
import Messages from "./components/Social/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from "react";
import Anime from "./components/Anime/Anime";
import Music from "./components/Music/Music";


const App = () => {
    return (
        <BrowserRouter>
            <div className={'parent'}>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav/>
                    <div className={'app-content-wrapper'}>
                        <Routes>
                            <Route path={'/messages'} element={<Messages/>}/>
                            <Route path={'/discussions'} element={<Discussion/>}/>
                            <Route path={'/anime'} element={<Anime/>}/>
                            <Route path={'/music'} element={<Music/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
// export default Header;