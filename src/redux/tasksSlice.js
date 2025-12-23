import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [
      { id: 1, title: "Learn React", completed: false },
      { id: 2, title: "Build Task App", completed: true },
    ],
    filter: "all",
    search: "",
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },

    updateTask: (state, action) => {
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }  
    },

    deleteTask: (state, action) => {
      state.items = state.items.filter(
        task => task.id !== action.payload
      );
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {
  addTask,
  updateTask,
  deleteTask,
  setFilter,
  setSearch,
} = tasksSlice.actions;

export default tasksSlice.reducer;
