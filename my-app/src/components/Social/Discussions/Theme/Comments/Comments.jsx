import classes from './Comments.module.css';
import Comment from "./Comment/Comment";

let comment_data = [
    {"id": 1, "img": process.env.PUBLIC_URL + 'avatars/sadboy_avatar.png', "text": 'Chainsawman is the best!'},
    {"id": 2, "img": process.env.PUBLIC_URL + 'avatars/sadgirl_avatar.jpg', "text": 'Makima is so cute'},
    {"id": 3, "img": process.env.PUBLIC_URL + 'avatars/girl2.jpg', "text": 'Episode 10 was a lil bit boring :('},
    {"id": 3, "img": process.env.PUBLIC_URL + 'avatars/girl3.jpg', "text": 'Episode 11 is out now!!!!! im so exited! Wanna watch it now!!'},
]

const Comments = () => {
    return (
        <div className={classes.content_item}>
            <p className={classes.line}>Comments</p>
            <div>
                <Comment
                    img={comment_data[0].img}
                    text={comment_data[0].text}
                />
                <Comment
                    img={comment_data[1].img}
                    text={comment_data[1].text}
                />
                <Comment
                    img={comment_data[2].img}
                    text={comment_data[2].text}
                />
                <Comment
                    img={comment_data[3].img}
                    text={comment_data[3].text}
                />
            </div>
        </div>
    )
}

export default Comments