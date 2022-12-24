import {NavLink} from "react-router-dom";
import classes from "./Header.module.css";

const Button = (props) => {
    return (
        <div className={classes.button}>
            <NavLink to={`/${props.path}`}>{props.name}</NavLink>
        </div>
    )
}

export default Button