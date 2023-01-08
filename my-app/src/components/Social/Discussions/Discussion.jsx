import Theme from "./Theme/Theme";

const Discussion = (props) => {
    return (
        <div>
            <Theme
                store={props.store}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Discussion