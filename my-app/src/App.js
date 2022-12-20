import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Discussion from "./components/Profile/Discussion";


const App = () => {
    return (
        <div className={'parent'}>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <Discussion/>
            </div>
        </div>
    );
}


export default App;
// export default Header;