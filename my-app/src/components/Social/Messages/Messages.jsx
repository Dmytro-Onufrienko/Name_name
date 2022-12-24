import classes from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Mess_Nav from "./Mess_Nav/Mess_Nav";

let users = [
    {"id": 1, "name": "sadboy", "img": process.env.PUBLIC_URL + 'avatars/sadboy_avatar.png'},
    {"id": 2, "name": "sadgirl", "img": process.env.PUBLIC_URL + 'avatars/sadgirl_avatar.jpg'},
    {"id": 3, "name": "girl2", "img": process.env.PUBLIC_URL + 'avatars/girl2.jpg'},
    {"id": 4, "name": "girl3", "img": process.env.PUBLIC_URL + 'avatars/girl3.jpg'},
]

const Messages = () => {
    return (
        <div className={classes.parent}>
            <div className={classes.mess_ava}>
                <Mess_Nav
                    img={users[0].img}
                    name={users[0].name}
                />
                <Mess_Nav
                    img={users[1].img}
                    name={users[1].name}/>
                <Mess_Nav
                    img={users[2].img}
                    name={users[2].name}/>
                <Mess_Nav
                    img={users[3].img}
                    name={users[3].name}/>
            </div>
            <div className={classes.dialog}>
                <Dialog/>
            </div>
        </div>
    )
}

export default Messages