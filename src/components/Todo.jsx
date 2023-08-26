import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from '../store/todoSlice';


const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    const [todo, setTodo] = useState("");
    const [edittodo, seteditTodo] = useState("");
    const [editIdx, seteditIdx] = useState(-1);

    const addTodofunc = (todo) => {
        if (todo === "" || todo === undefined || todo === null) {
            alert("Please enter Task");
            return;
        }
        dispatch(addTodo(todo));
        setTodo("");
    };

    const editTask = (idx, task) => {
        if (task === "" || task === undefined || task === null) {
            alert("Please enter Task");
            return;
        }
        dispatch(editTodo({ idx, task }));
        seteditTodo("");
        seteditIdx(-1);
    }

    const deleteTask = (id) => {
        dispatch(deleteTodo(id));
    }

    const readinp = (e) => {
        setTodo(e.target.value);
    }

    const readeditinp = (e) => {
        seteditTodo(e.target.value);
    }


    return (
        <div className="flex-col  items-center justify-center m-12">
            <h1>Todo list using the Redux Toolkit</h1>
            <div className="flex items-center justify-between   m-12">
                <input type="text" onChange={readinp} value={todo} className="mx-4 rounded h-8 border-transparent border-0 outline-0  text-black p-2" />
                <button className="bg-red-400 px-4 py-1 rounded" onClick={() => addTodofunc(todo)}>Add</button>
            </div>

            {
                todos?.map((todo, idx) => {
                    return (

                        <div className="flex items-center justify-between m-12" key={idx}>


                            {
                                editIdx === idx ?

                                    <>
                                        <input type="text" onChange={readeditinp} defaultValue={todo} className="mx-4 rounded h-8 border-transparent border-0 outline-0  text-black p-2" />
                                        <button className="bg-red-400 px-4 py-1 rounded" onClick={() => editTask(idx, edittodo)}>Save</button>
                                    </>


                                    :
                                    <>
                                        <p className="bg-gray-700 px-4 py-2 rounded w-3/4 mx-2 ">{todo}</p>
                                        <button className="bg-red-400 px-4 py-1 rounded mx-5" onClick={() => {
                                            seteditIdx(idx);
                                            seteditTodo(todo);
                                        }}>Edit</button>
                                        <button className="bg-red-400 px-4 py-1 rounded" onClick={() => deleteTask(idx)}>Delete</button>
                                    </>


                            }

                        </div>


                    )
                }


                )
            }







        </div>
    )
}


export default Todo