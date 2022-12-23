import classes from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Mess_Nav from "./Mess_Nav/Mess_Nav";

const Messages = () => {
    return (
        <div className={classes.parent}>
            <div className={classes.mess_ava}>
                <Mess_Nav
                    img={process.env.PUBLIC_URL + 'avatars/sadboy_avatar.png'}
                />
                <Mess_Nav
                    img={process.env.PUBLIC_URL + 'avatars/sadgirl_avatar.jpg'}
                />
                <Mess_Nav
                    img={process.env.PUBLIC_URL + 'avatars/girl2.jpg'}
                />
                <Mess_Nav
                    img={process.env.PUBLIC_URL + 'avatars/girl3.jpg'}
                />
            </div>
            <div className={classes.dialog}>
                <Dialog/>
            </div>
        </div>
    )
}

export default Messages