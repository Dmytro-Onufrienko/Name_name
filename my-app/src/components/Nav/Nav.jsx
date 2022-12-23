import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={"/profile"}
                         className={(link_line) => link_line.isActive ? classes.active : classes.link_line}>
                    Profile
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/messages'}
                 className={(link_line) => link_line.isActive ? classes.active : classes.link_line}>
                    Messages
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/discussions"}
                 className={(link_line) => link_line.isActive ? classes.active : classes.link_line}>
                    Discussions
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav