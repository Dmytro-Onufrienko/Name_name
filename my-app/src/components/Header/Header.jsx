import classes from './Header.module.css'
import Logo from "./Logo";
import Button from "./Button";

const Header = () => {
    return (
        <header className={classes.header}>
            <Logo/>
            <div className={classes.buttons}>
                <Button name={'Social'} path={'messages'}/>
                <Button name={'Anime'} path={'anime'}/>
                <Button name={'Music'} path={'music'}/>
            </div>

        </header>
    )
}

export default Header