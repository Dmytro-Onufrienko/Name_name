import classes from './Theme.module.css'
import Comments from "./Comments/Comments";

let discussion_theme = [
    {
        "id": 1, "user_ava": process.env.PUBLIC_URL + 'avatars/cyber_girl.jpg', "name":
            "Zen", "text": "Guys, what do you think about chainsawman? Is it worth it to watch?"
    }
]

const Theme = () => {
    return (
        <div>
            <p className={classes.line}>Discussion theme</p>
            <div className={classes.discussion_theme}>
                <div className={classes.content_item}>
                    <img src={discussion_theme[0].user_ava} className={classes.ava} alt={'avatar'}/>
                </div>
                <div className={classes.content_item}>
                    <p className={classes.line}>{discussion_theme[0].text}</p>
                </div>
            </div>
            <Comments/>
        </div>
    )
}

export default Theme