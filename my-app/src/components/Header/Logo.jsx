import classes from './Header.module.css'

const Logo = () => {
    return <img
        src={process.env.PUBLIC_URL + 'icons/favicon_Ukraine.png'}
        id={classes.logo}
        alt='logo'/>
}

export default Logo