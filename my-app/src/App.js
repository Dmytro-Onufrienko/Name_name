import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Discussion from "./components/Social/Discussions/Discussion";
import Messages from "./components/Social/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from "react";
import Anime from "./components/Anime/Anime";
import Music from "./components/Music/Music";

let users = [
    {"id": 1, "name": "sadboy", "img": process.env.PUBLIC_URL + 'avatars/sadboy_avatar.png'},
    {"id": 2, "name": "sadgirl", "img": process.env.PUBLIC_URL + 'avatars/sadgirl_avatar.jpg'},
    {"id": 3, "name": "girl2", "img": process.env.PUBLIC_URL + 'avatars/girl2.jpg'},
    {"id": 4, "name": "girl3", "img": process.env.PUBLIC_URL + 'avatars/girl3.jpg'},
]

let discussion_theme = [
    {
        "id": 1, "user_ava": process.env.PUBLIC_URL + 'avatars/cyber_girl.jpg', "name":
            "Zen", "text": "Guys, what do you think about chainsawman? Is it worth it to watch?"
    }
]

let comments_data = [
    {"id": 1, "img": process.env.PUBLIC_URL + 'avatars/sadboy_avatar.png', "text": 'Chainsawman is the best!'},
    {"id": 2, "img": process.env.PUBLIC_URL + 'avatars/sadgirl_avatar.jpg', "text": 'Makima is so cute'},
    {"id": 3, "img": process.env.PUBLIC_URL + 'avatars/girl2.jpg', "text": 'Episode 10 was a lil bit boring :('},
    {"id": 3, "img": process.env.PUBLIC_URL + 'avatars/girl3.jpg', "text": 'Episode 11 is out now!!!!! im so exited! Wanna watch it now!!'},
]


const App = () => {
    return (
        <BrowserRouter>
            <div className={'parent'}>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav/>
                    <div className={'app-content-wrapper'}>
                        <Routes>
                            <Route path={'/messages'} element={<Messages users={users}/>}/>
                            <Route path={'/discussions'} element={<Discussion discussion_theme={discussion_theme} comments_data={comments_data}/>}/>
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