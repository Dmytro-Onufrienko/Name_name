import classes from './Comments.module.css';
import Comment from "./Comment/Comment";
import Add_comment_Container from "./Add_comment_Container";


const Comments = (props) => {
    let comments = (props.store.comments_data.slice(0).reverse())
        .map(comment => (<Comment img={comment.img} text={comment.text}/>))
    return (
        <div className={classes.content_item}>
            <p className={classes.line}>Comments</p>
            <Add_comment_Container
                store={props.store}
                dispatch={props.dispatch}
            />
            <div>
                {comments}
            </div>
        </div>
    )
}

export default Comments