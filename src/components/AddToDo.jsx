import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";
import { IoIosAddCircle } from "react-icons/io";

const AddToDo = () => {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text));
        setText("");
    };

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className='form position-relative' >
            <form onSubmit={handleOnSubmit}>
                <div >
                    <input
                        type="text"
                        value={text}
                        onChange={onChange}
                        placeholder="Enter the new Task"
                    />
                </div>
                <div onClick={handleOnSubmit} className="position-absolute bottom-0 end-0 fs-1 text-success"><IoIosAddCircle /></div>
            </form>

        </div>
    )
}

export default AddToDo
