import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppWithoutThunk from "./old_redux/App";
import AppWithThunk from "./old_redux_with_thunk/App";
import AppWithNewRedux from "./new_redux/App";
import reportWebVitals from "./reportWebVitals";
import UserList from "./hoc/Users";
import TodoList from "./hoc/Todo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <div>
        Old Redux without Thunk <br />
      </div>
      <AppWithoutThunk />
      <div>
        <br /> <br /> <br /> <br />
        Old Redux with Thunk <br />
      </div>
      <AppWithThunk />
      <div>
        <br /> <br /> <br /> <br />
        New Redux Without Thunk <br />
      </div>
      <AppWithNewRedux />
      <div>
        <br /> <br /> <br /> <br />
        Higher Order Component Example <br />
      </div>
      <div>User List</div>
      <UserList props={"test"} />
      <br /> <br />
      <div>Todo List</div>
      <TodoList props={"another test"} />
      <br /> <br /> <br /> <br />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
