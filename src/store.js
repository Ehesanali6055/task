// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import FileReduce from "./FileResduce/Slice";

const store = createStore(
  FileReduce,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
