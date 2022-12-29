import interlocutor from './interlocutorMessage.module.css'
import user from './userMessage.module.css'

const Message = (props) => {
    return (
        <div className={props.user_id !== props.current_user_id ? interlocutor.post_div : user.post_div}>
            <img className={props.user_id !== props.current_user_id ? interlocutor.user_ava : user.user_ava}
                 src={`${props.img}`}
                 alt="avatar"/>
            <p className={props.user_id !== props.current_user_id ? interlocutor.line : user.line}>
                {props.text}
            </p>
        </div>
    )
}

export default Message