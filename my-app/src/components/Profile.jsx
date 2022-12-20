import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.parent}>
            <div className={classes.content}>
                {/*<img src="https://i.pinimg.com/originals/f1/6f/ed/f16fedc86686146624897737cf4338d8.jpg" id={'top-img'}/>*/}
                <div className={classes.content_item}>
                    <p className={classes.line}>Ava</p>
                    <img src="https://ih1.redbubble.net/image.1137167192.4552/pp,840x830-pad,1000x1000,f8f8f8.jpg"
                         id={classes.ava}/>
                </div>
                <div className={classes.content_item}>
                    <p className={classes.line}>Description</p>
                </div>
                <div className={classes.content_item}>
                    <p className={classes.line}>Posts</p>
                    <div className={classes.line}>
                        New Post
                    </div>
                    <div>
                        <p className={classes.line}>Post 1</p>
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
            </div>
        </div>
    )
}

export default Profile