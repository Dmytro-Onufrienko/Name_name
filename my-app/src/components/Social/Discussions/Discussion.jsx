import Theme from "./Theme/Theme";

const Discussion = (props) => {
    return (
        <div>
            <Theme discussion_theme={props.discussion_theme} comments_data={props.comments_data}/>
        </div>
    )
}

export default Discussion