import classes from './Theme.module.css'
import Comment from "./Comment/Comment";

const Theme = () => {
    return (
        <div className={classes.content_item}>
            <p className={classes.line}>Comments</p>
            <div>
                <Comment
                    img={process.env.PUBLIC_URL + 'avatars/sadboy_avatar.png'}
                    text={'Chainsawman is the best!'}
                />
                <Comment
                    img={process.env.PUBLIC_URL + 'avatars/sadgirl_avatar.jpg'}
                    text={'Makima is so cute'}
                />
                <Comment
                    img={process.env.PUBLIC_URL + 'avatars/girl2.jpg'}
                    text={'Episode 10 was a lil bit boring :('}
                />
                <Comment
                    img={process.env.PUBLIC_URL + 'avatars/girl3.jpg'}
                    text={'Episode 11 is out now!!!!! im so exited! Wanna watch it now!!'}
                />
            </div>
        </div>
    )
}

export default Theme