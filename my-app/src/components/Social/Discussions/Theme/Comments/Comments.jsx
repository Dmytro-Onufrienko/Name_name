import classes from './Comments.module.css';
import Comment from "./Comment/Comment";
import Add_Comment_Container from "./Add_Comment/Add_Comment_Container";


const Comments = (props) => {
    let comments = (props.comments_data.slice(0).reverse())
        .map(comment => (<Comment img={comment.img} text={comment.text}/>))
    return (
        <div className={classes.content_item}>
            <p className={classes.line}>Comments</p>
            <Add_Comment_Container/>
            <div>
                {comments}
            </div>
        </div>
    )
}

export default Comments