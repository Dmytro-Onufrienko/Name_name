import Theme from './Theme'
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        discussion_theme: state.DiscussionPage.discussion_theme
    }
}

const Theme_Container = connect(mapStateToProps)(Theme)

export default Theme_Container