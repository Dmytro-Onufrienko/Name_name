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
            <Comments
                discussion_theme={props.discussion_theme}
                comments_data={props.comments_data}
                new_post_text={props.new_post_text}
                update_post_text={props.update_post_text}
                add_comment={props.add_comment}
            />
        </div>
    )
}

export default Theme