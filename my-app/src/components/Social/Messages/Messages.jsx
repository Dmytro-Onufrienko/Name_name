import classes from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Mess_Nav from "./Mess_Nav/Mess_Nav";

let users = [
    {"id": 1, "name": "sadboy", "img": process.env.PUBLIC_URL + 'avatars/sadboy_avatar.png'},
    {"id": 2, "name": "sadgirl", "img": process.env.PUBLIC_URL + 'avatars/sadgirl_avatar.jpg'},
    {"id": 3, "name": "girl2", "img": process.env.PUBLIC_URL + 'avatars/girl2.jpg'},
    {"id": 4, "name": "girl3", "img": process.env.PUBLIC_URL + 'avatars/girl3.jpg'},
]

let users_avatars = users
    .map(user => (<Mess_Nav img={user.img} name={user.name} id={user.id}/>))

const Messages = () => {
    return (
        <div className={classes.parent}>
            <div className={classes.mess_ava}>
                {users_avatars}
            </div>
            <div className={classes.dialog}>
                <Dialog/>
            </div>
        </div>
    )
}

export default Messages