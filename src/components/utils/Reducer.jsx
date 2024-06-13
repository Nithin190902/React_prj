import React from "react";
import { Action } from "./Action";
import findIndexById from "./helper";

export const initialState = [
  {
    id: 1,
    name: "Arul",
    mobile: "984122222",
    email: "arul@gmail.com",
    batch: "Fita1",
  },
  {
    id: 2,
    name: "Praveen",
    mobile: "983333333",
    email: "praveen@gmail.com",
    batch: "Fita2",
  },

  {
    id: 3,
    name: "prathap",
    mobile: "9841534214",
    email: "prathap@gmail.com",
    batch: "Fita3",
  },
  {
    id: 4,
    name: "tharnika",
    mobile: "984166666",
    email: "tharnika@gmail.com",
    batch: "Fita4",
  },
  {
    id: 5,
    name: "suriya",
    mobile: "984178656892",
    email: "suriya@gmail.com",
    batch: "Fita5",
  },
];

function Reducer(state, action) {
  switch (action.type) {
    case Action.ADD_USER:
      state.push(action.payload);
      return [...state];
      break;
    case Action.DELETE_USER:
      console.log(state, action);
      const index = findIndexById(action.payload, state);
      state.splice(index, 1);
      return [...state];
      break;
    case Action.EDIT_USER:
      const indexs = findIndexById(action.payload.id, state);

      state.splice(indexs, 1, action.payload);
      return [...state];
  }
}

export default Reducer;
