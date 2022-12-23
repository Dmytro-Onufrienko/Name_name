import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src={process.env.PUBLIC_URL + 'icons/favicon_Ukraine.png'}
                id={classes.logo}
                alt='logo'/>
        </header>
    )
}

export default Header