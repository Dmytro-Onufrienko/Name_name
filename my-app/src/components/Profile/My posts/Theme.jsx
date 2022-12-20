import classes from './Theme.module.css'
import Comment from "./Post/Comment";

const Theme = () => {
    return (
        <div className={classes.content_item}>
            <p className={classes.line}>Posts</p>
            <div className={classes.line}>
                New Post
            </div>
            <div>
                <Comment/>
                <div className={classes.post_div}>
                    <img className={classes.user_ava} src="https://i.pinimg.com/736x/49/ce/44/49ce44f19a40c220fba5b425dff9dfda.jpg" alt=""/>
                    <p className={classes.line}>Makima so cute</p>
                </div>
                <p className={classes.line}>Post 2</p>
                <p className={classes.line}>Post 3</p>
                <p className={classes.line}>Post 1</p>
                <p className={classes.line}>Post 2</p>
                <p className={classes.line}>Post 3</p>
                <p className={classes.line}>Post 1</p>
                <p className={classes.line}>Post 2</p>
                <p className={classes.line}>Post 3</p>
                <p className={classes.line}>Post 1</p>
                <p className={classes.line}>Post 2</p>
                <p className={classes.line}>Post 3</p>
            </div>
        </div>
    )
}

export default Theme