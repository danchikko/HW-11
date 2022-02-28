import Card from "./Card"
import classes from './Modal.module.css';

const Modal = (props) => {
    return (
        <div className={classes.backdrop}>
            <Card className={classes.modal}>
            <header className={classes.header}>
                <h1>{props.title}</h1>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
            <button onClick={props.onClick}>{props.btnText}</button>
            </footer>
            </Card>
        </div>
    )
}

export default Modal;