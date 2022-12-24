import classes from './Theme.module.css'
import Comments from "./Comments/Comments";


const Theme = (props) => {
    return (
        <div>
            <p className={classes.line}>Discussion theme</p>
            <div className={classes.discussion_theme}>
                <div className={classes.content_item}>
                    <img src={props.discussion_theme[0].user_ava} className={classes.ava} alt={'avatar'}/>
                </div>
                <div className={classes.content_item}>
                    <p className={classes.line}>{props.discussion_theme[0].text}</p>
                </div>
            </div>
            <Comments comments_data={props.comments_data}/>
        </div>
    )
}

export default Theme