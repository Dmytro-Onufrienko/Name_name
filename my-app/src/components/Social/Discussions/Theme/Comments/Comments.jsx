import classes from './Comments.module.css';
import Comment from "./Comment/Comment";


const Comments = (props) => {
    let comments = props.comments_data
        .map(comment => (<Comment img={comment.img} text={comment.text}/>))
    return (
        <div className={classes.content_item}>
            <p className={classes.line}>Comments</p>
            <div>
                {comments}
            </div>
        </div>
    )
}

export default Comments