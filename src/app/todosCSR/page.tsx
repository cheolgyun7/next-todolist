"use client";
import React from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { useQuery } from "@tanstack/react-query";
import { getTodo } from "@/todoApi/todoApi";

const TodosCSR = () => {
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodo,
  });
  if (isLoading) {
    return <div>isLoading....!</div>;
  }
  if (isError) {
    return <div>error....!</div>;
  }
  return (
    <div className="gradient min-h-screen">
      <TodoForm />
      <div className="flex justify-center">
        <TodoList isDone={false} todos={todos} />
        <TodoList isDone={true} todos={todos} />
      </div>
    </div>
  );
};

export default TodosCSR;
