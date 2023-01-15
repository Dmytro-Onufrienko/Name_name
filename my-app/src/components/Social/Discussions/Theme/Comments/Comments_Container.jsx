import Comments from "./Comments";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        comments_data: state.DiscussionPage.comments_data
    }
}


const Comments_Container = connect(mapStateToProps)(Comments);

export default Comments_Container