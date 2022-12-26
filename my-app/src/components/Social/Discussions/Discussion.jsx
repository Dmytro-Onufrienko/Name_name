import Theme from "./Theme/Theme";

const Discussion = (props) => {
    return (
        <div>
            <Theme
                discussion_theme={props.discussion_theme}
                comments_data={props.comments_data}
                new_post_text={props.new_post_text}
                update_post_text={props.update_post_text}
                add_comment={props.add_comment}
            />
        </div>
    )
}

export default Discussion