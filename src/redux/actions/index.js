import axios from "axios";
import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from "./type";
const API_URL = "http://localhost:5000";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todo`, { data });
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling addnewtodo API", error.message);
  }
};

export const getAllToDos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todo`);
    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodoList API", error.message);
  }
};

export const toggleToDo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todo/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling ToggleTodo API", error.message);
  }
};


export const UpdateToDo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todo/${id}`, { data });
    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling UpdateTodo API", error.message);
  }
};

export const deleteToDo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/todo/${id}`);
    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling deleteTodo API", error.message);
  }
};

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, filter: tab });

}
