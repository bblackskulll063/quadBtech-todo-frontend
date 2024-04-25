import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { toggleToDo, UpdateToDo, deleteToDo} from "../redux/actions";
import { useDispatch} from "react-redux";

const SingleToDo = ({ todo }) => {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false)
    const [text, setText] = useState(todo.data)


    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(prevState => !prevState)
        dispatch(UpdateToDo(todo._id, text));
        window.location.reload(true);
    }

    

    return (
        <li key={todo._id}
            className={`d-flex justify-content-between ${todo.done ? "text-decoration-line-through" : ""}`}
            >
            {editing === false ?
                <div onClick={() => { dispatch(toggleToDo(todo._id)); window.location.reload(true); }}>
                    {todo.data}
                </div> :
                <form onSubmit={onFormSubmit} >
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </form>
            }
            <div className='icon '>
                <FaRegEdit size={30} onClick={() => setEditing(prevState => !prevState)} />
                <MdDelete size={30} onClick={() => {dispatch(deleteToDo(todo._id));window.location.reload(true);}} />
            </div>
        </li>
    )
}

export default SingleToDo
