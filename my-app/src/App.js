import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Discussion from "./components/Profile/Discussion";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from "react";


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
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
// export default Header;