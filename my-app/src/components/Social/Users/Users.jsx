import Users_avatars from "./Users_avatars/Users_avatars";

const Users = (props) => {
    let users_avatars = props.users
        .map(user => (<Users_avatars img={user.img} name={user.name} key={user.id} id={user.id}/>))

    return (
        <div>
            users
            <div>
                {users_avatars}
            </div>
        </div>
    )
}


export default Users