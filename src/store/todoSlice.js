import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo(state, action) {
            state.push(action.payload);
        }
        ,
        deleteTodo(state, action) {
            return state.filter((item, idx) => idx != action.payload)
        }
        , editTodo(state, action) {
            const { idx, task } = action.payload;
            state[idx] = task;
        }
    }
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;