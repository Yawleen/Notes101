import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: undefined,
};

export const notes = createSlice({
  name: "notes",
  initialState,
  reducers: {
    getNotes: (state, action) => {
      state.list = action.payload;
    },
    updateNote: (state, action) => {
      const noteIndex = state.list.findIndex(
        (item) => item.id === action.payload.id
      );

      state.list.splice(noteIndex, 1, action.payload);
    },
    addNote: (state, action) => {
      state.list.push(action.payload);
    },
    deleteNote: (state, action) => {
      const noteIndex = state.list.findIndex(
        (item) => item.id === action.payload
      );

      state.list.splice(noteIndex, 1);
    },
  },
});

export function getNotesList(action) {
  return function (dispatch, getState) {
    fetch("/site-portfolio/projets/projets-react/Notes101/data/notes.json")
      .then((data) => data.json())
      .then((data) => dispatch(getNotes(data.notes)));
  };
}

export const { getNotes, addNote, updateNote, deleteNote } = notes.actions;
export default notes.reducer;
