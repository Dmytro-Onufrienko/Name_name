import {NavLink} from "react-router-dom";
import classes from "./Users_avatars.module.css";

const Users_avatars = (props) => {
    return (
        <div className={classes.user_card}>
            <NavLink to={`/messages/${props.name}`}>
                <img className={classes.user_ava} src={`${props.img}`} alt="ava"/>
                <p>{props.name}</p>
            </NavLink>
        </div>
    )
}

export default Users_avatars