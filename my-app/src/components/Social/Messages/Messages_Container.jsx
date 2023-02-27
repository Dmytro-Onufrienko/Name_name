import { connect } from "react-redux";
import Messages from "./Messages";

let mapStateToProps = (state) => {
    return {
        users: state.MessagePage.users
    }
}


const Messages_Container = connect(mapStateToProps)(Messages)



export default Messages_Container