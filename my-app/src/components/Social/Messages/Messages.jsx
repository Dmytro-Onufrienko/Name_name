import classes from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Mess_Nav from "./Mess_Nav/Mess_Nav";


const Messages = (props) => {
    let users_avatars = props.users
        .map(user => (<Mess_Nav img={user.img} name={user.name} id={user.id}/>))
    return (
        <div className={classes.parent}>
            <div className={classes.mess_ava}>
                {users_avatars}
            </div>
            <div className={classes.dialog}>
                <Dialog users={props.users}
                        placeholder={props.placeholder}
                        update_textarea={props.update_textarea}
                        current_user={props.current_user}/>
            </div>
        </div>
    )
}

export default Messages