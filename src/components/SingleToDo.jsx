import React, { useState, useEffect } from 'react'
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
            onClick={() => { dispatch(toggleToDo(todo._id)); }}>
            {editing == false ?
                <div >
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
                <FaRegEdit onClick={() => setEditing(prevState => !prevState)} />
                <MdDelete onClick={() => {dispatch(deleteToDo(todo._id));window.location.reload(true);}} />
            </div>
        </li>
    )
}

export default SingleToDo
