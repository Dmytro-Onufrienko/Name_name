import Users_avatars from "./Users_avatars/Users_avatars";
import classes from "./Users.module.css";

const Users = (props) => {
    let users_avatars = props.users
        .map(user => (<Users_avatars img={user.img} name={user.name} key={user.id} id={user.id}/>))

    return (
        <div>
            <div className={classes.users_list}>
                {users_avatars}
            </div>
        </div>
    )
}


export default Users