import classes from './Discussion.module.css'
import Theme from "./My posts/Theme";

const Discussion = () => {
    return (
        <div className={classes.parent}>
            <div className={classes.content}>
                <div className={classes.content_item}>
                    <img src="https://ih1.redbubble.net/image.1137167192.4552/pp,840x830-pad,1000x1000,f8f8f8.jpg"
                         id={classes.ava} alt={'avatar'}/>
                </div>
                <div className={classes.content_item}>
                    <p className={classes.line}>Description</p>
                </div>
                <Theme />
            </div>
        </div>
    )
}

export default Discussion