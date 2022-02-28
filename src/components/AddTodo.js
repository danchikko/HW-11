import { useContext, useState } from "react";
import { ADD } from "../constans";
import { TodoContext } from "../context";
import Card from "./Card"
import Modal from "./Modal";
import classes from './AddTodo.module.css';

const AddTodo = () => {
    const [title, setTitle] = useState('')
    const {dispath} = useContext(TodoContext)
    const [error,setError] = useState(false)

    
    const usersChangeHandler = (e) => setTitle(e.target.value)
    const add = (e) => {
        e.preventDefault()
        if(title.trim() === ''){
            setError({title : 'Warning!',message : 'Error!'})
            return
            
        }
            const todo = {
                    title,
                    date: new Date().toLocaleString(),
                    complete: false,
                    id: Date.now()
            }

            dispath({type: ADD, todo})
            setTitle('')
        }
        const confirmHandlrer = () =>{
            setError(false)
        }

    return(
        <div>
            <Card>
                {error && <Modal title = {error.title} message = {error.message} onClick = {confirmHandlrer} btnText= {'Ok'}/>}
                <form className={classes.todocard}>
                    <input className={classes.todoinput} type="text" value={title} onChange={usersChangeHandler}/>
                    <button className={classes.todobutton} type="submit" onClick={add}>Add Todo</button>
                </form>
            </Card>
        </div>
    )
}

export default AddTodo;

