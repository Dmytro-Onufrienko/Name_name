import { connect } from 'react-redux'
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users
    }
}

const Users_Container = connect(mapStateToProps)(Users)

export default Users_Container