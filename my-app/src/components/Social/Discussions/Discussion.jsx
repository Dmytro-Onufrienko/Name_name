import Theme from "./Theme/Theme";

const Discussion = (props) => {
    return (
        <div>
            <Theme
                discussion_theme={props.discussion_theme}
                comments_data={props.comments_data}
                placeholder={props.placeholder}
                dispatch={props.dispatch}
                current_user={props.current_user}
            />
        </div>
    )
}

export default Discussion