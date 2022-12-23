import classes from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href="my-app/src/components#s" className={classes.link_line}>Profile</a>
            </div>
            <div className={classes.item}>
                <a href="my-app/src/components#s" className={classes.link_line}>Messages</a>
            </div>
            <div className={classes.item}>
                <a href="my-app/src/components#s" className={classes.link_line}>Discussions</a>
            </div>
        </nav>
    )
}

export default Nav