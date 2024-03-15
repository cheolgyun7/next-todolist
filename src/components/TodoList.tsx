"use client";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Todos } from "@/types/type";
import { getTodo } from "@/todoApi/todoApi";
import useTodoMutations from "@/mutation/mutation";

type TodoListProps = {
  isDone: boolean;
  todos: Todos[] | undefined;
};
//완료 #ffd7ff 진행중
const TodoList: React.FC<TodoListProps> = ({ isDone, todos }) => {
  const { handleDeleteButton, handleToggleButton } = useTodoMutations();
  return (
    <div
      className={` rounded-lg p-4 mr-1 w-[350px] mt-5 ${
        isDone ? "bg-[#ffd7ff]" : "bg-[#ffedff]"
      }`}
    >
      <h1 className="text-2xl font-semibold">
        {isDone ? "완료" : "해야 할 일들"}
      </h1>
      {todos
        ?.filter((item) => item.isDone === isDone)
        ?.map((todo: Todos) => (
          <div key={todo.id} className="flex items-center justify-between mt-4">
            <div className="cursor-pointer">
              <div className="w-[180px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                {todo.title}
              </div>
              <div className="w-[180px] text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                {todo.contents}
              </div>
            </div>
            <div>
              <button
                onClick={() => handleToggleButton(todo.id, todo.isDone)}
                className={`px-3 py-1 rounded-md ${
                  todo.isDone
                    ? "bg-red-500 hover:bg-red-700"
                    : "bg-purple-500 hover:bg-purple-700"
                } text-white`}
              >
                {todo.isDone ? "취소" : "완료"}
              </button>
              <button
                onClick={() => handleDeleteButton(todo.id)}
                className="ml-2 px-3 py-1 rounded-md bg-purple-300 hover: hover:bg-purple-600 hover:text-white"
              >
                삭제
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
