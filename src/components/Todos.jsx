
import { deleteToDo, getAllToDos } from "../redux/actions";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import SingleToDo from "./SingleToDo";
import Tabs from "./Tabs";
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from "../redux/actions/type";

const Todos = () => {
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos);
    const currentTab = useSelector((state) => state.currentTab);

    useEffect(() => {
        dispatch(getAllToDos());
    }, []);

    const getTodos = () => {
        if (currentTab === ALL_TODOS) {
            return todos;
        } else if (currentTab === ACTIVE_TODOS) {
            return todos.filter((todo) => !todo.done);
        }
        else if (currentTab === DONE_TODOS) {
            return todos.filter((todo) => todo.done);
        }
    }

    const removeDoneTodos = () => {
        todos.forEach(({ done, _id }) => {
            if (done) {
                dispatch(deleteToDo(_id))
            }
        })
    }


    return (
        <div className="todo-list ">
            <div className="d-flex justify-content-between mx-4">
                <Tabs currentTab={currentTab} />
                {todos.some(todos => todos.done) &&
                    <button className="btn btn-danger" onClick={removeDoneTodos}>remove done task</button>
                }
            </div>
            <ul className="list-unstyled mx-3">
                {getTodos().map((todo) => (
                    <SingleToDo todo={todo} key={todo._id} />
                ))}
            </ul>
        </div>
    )
}

export default Todos
