import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Discussion from "./components/Profile/Discussion";
import Messages from "./components/Messages/Messages";


const App = () => {
    return (
        <div className={'parent'}>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className={'app-content-wrapper'}>
                    {/*<Discussion/>*/}
                    <Messages/>
                </div>
            </div>
        </div>
    );
}


export default App;
// export default Header;