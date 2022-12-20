import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
                id={classes.logo}/>
        </header>
    )
}

export default Header