import { useContext } from "react";
import { COMPLETE, DELETE } from "../constans";
import { TodoContext } from "../context";
import classes from './TodoList.module.css';

    const TodoList = () => {
    const {users, dispath} = useContext(TodoContext)

    const completeTodo = (id) => {
        dispath({type: COMPLETE, id})
    }

    const deleteTodo = (id) => {
        dispath({type: DELETE, id})
    }

    return(
        <div className={classes.container}>
          { users.map(el => <li className={classes.todolist} key={el.id}>
            <b style={{textDecoration : el.complete ? "Line-through" : 'none'}}>{el.title}</b>&nbsp;
        <i>{el.date}</i>&nbsp;
            <button onClick={() => completeTodo(el.id)}>C</button>
            <button onClick={() => deleteTodo(el.id)}>Delete</button>
        </li>
        )}
        </div>
    )
}

export default TodoList;

{/* <div>
{error && (
 <Modal
 />
)}
 <ol>
     {render()}
 </ol>
</div> */}

