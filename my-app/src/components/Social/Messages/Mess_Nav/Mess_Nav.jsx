import classes from "./Mess_Nav.module.css"
import {NavLink} from "react-router-dom";

const Mess_Nav = (props) => {
    return (
        <div>
            <NavLink to={`/messages/${props.name}`}>
                <img className={classes.user_ava} src={`${props.img}`}
                     alt="ava"/>
            </NavLink>
        </div>
    )
}

export default Mess_Nav