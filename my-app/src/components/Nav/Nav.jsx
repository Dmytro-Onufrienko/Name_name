import classes from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <Link to={"/profile"} className={classes.link_line}>Profile</Link>
            </div>
            <div className={classes.item}>
                <Link to={'/messages'} className={classes.link_line}>Messages</Link>
            </div>
            <div className={classes.item}>
                <Link to={"/discussions"} className={classes.link_line}>Discussions</Link>
            </div>
        </nav>
    )
}

export default Nav