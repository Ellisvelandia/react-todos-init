import React from "react";
import TodoListContext from "./TodoListContext";

const TodoListState = ({ children }) => {
  const initialState = [
    {
      id: new Date().getTime(),
      name: "Todo-list-app",
    },
  ];

  return (
    <TodoListContext.Provider
      value={{
        initialState,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListState;
