import classes from "./Mess_Nav.module.css"

const Mess_Nav = (props) => {
    return (
        <div>
            <img className={classes.user_ava} src={`${props.img}`}
                alt="ava"/>
        </div>
    )
}

export default Mess_Nav