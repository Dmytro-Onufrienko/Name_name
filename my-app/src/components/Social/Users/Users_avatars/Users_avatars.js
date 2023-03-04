import {NavLink} from "react-router-dom";
import classes from "../Users.module.css";

const Users_avatars = (props) => {
    return (
        <div>
            <NavLink to={`/messages/${props.name}`}>
                <img className={classes.user_ava} src={`${props.img}`} alt="ava"/>
                <p className={classes.user_name}>{props.name}</p>
            </NavLink>
        </div>
    )
}

export default Users_avatars