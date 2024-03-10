import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

// slice is a piece of state => portion of store
const todoSlice = createSlice({
  name: "todo", 
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    duplicateTodo: (state, action) => {
      const prevIndex = state.tasks.findIndex(
        (tsk) => tsk.id === action.payload
      );
      const duplicatedTaskObj = state.tasks.find(
        (tsk) => tsk.id === action.payload
      );
      state.tasks.splice(prevIndex, 0, {
        id: Date.now(),
        text: duplicatedTaskObj.text,
      });
    },
  },
});

// addTodo, deleteTodo, editTodo => action automatically creatted by redux toolkit
// in devTool will see type:"todo/addTodo" this refers to
// todo => slice name will be displayed in redux devtool
// addTodo => action
//  todoSlice.actions will autoatically create actin creators

export const { addTodo, deleteTodo, duplicateTodo } = todoSlice.actions;

export default todoSlice.reducer;
