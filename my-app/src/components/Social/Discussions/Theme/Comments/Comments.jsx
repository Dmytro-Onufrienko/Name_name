import classes from './Comments.module.css';
import Comment from "./Comment/Comment";

let comments_data = [
    {"id": 1, "img": process.env.PUBLIC_URL + 'avatars/sadboy_avatar.png', "text": 'Chainsawman is the best!'},
    {"id": 2, "img": process.env.PUBLIC_URL + 'avatars/sadgirl_avatar.jpg', "text": 'Makima is so cute'},
    {"id": 3, "img": process.env.PUBLIC_URL + 'avatars/girl2.jpg', "text": 'Episode 10 was a lil bit boring :('},
    {"id": 3, "img": process.env.PUBLIC_URL + 'avatars/girl3.jpg', "text": 'Episode 11 is out now!!!!! im so exited! Wanna watch it now!!'},
]

let comments = comments_data
    .map(comment => (<Comment img={comment.img} text={comment.text}/>))

const Comments = () => {
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