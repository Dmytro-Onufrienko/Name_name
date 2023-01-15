import classes from './Messages.module.css'
import Dialog_Container from "./Dialog/Dialog_Container";
import Mess_Nav from "./Mess_Nav/Mess_Nav";


const Messages = (props) => {
    let users_avatars = props.users
        .map(user => (<Mess_Nav img={user.img} name={user.name} key={user.id} id={user.id}/>))
    return (
        <div className={classes.parent}>
            <div className={classes.mess_ava}>
                {users_avatars}
            </div>
            <div className={classes.dialog}>
                <Dialog_Container/>
            </div>
        </div>
    )
}

export default Messages