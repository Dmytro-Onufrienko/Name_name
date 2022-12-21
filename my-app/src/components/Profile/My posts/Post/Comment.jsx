import classes from './Comment.module.css'

const Comment = (props) => {
    return (
            <div className={classes.post_div}>
                <img className={classes.user_ava} src={`${props.img}`}
                     alt="avatar"/>
                <p className={classes.line}>{props.text}</p>
            </div>
    )
}

export default Comment