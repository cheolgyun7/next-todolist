"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { NewTodo } from "@/types/type";

const TodoForm = () => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");
  const queryClient = useQueryClient();

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await newTodoMutation.mutate(
      { title, contents, isDone: false },
      {
        onSuccess: () => {
          setTitle("");
          setContents("");
          queryClient.invalidateQueries({
            queryKey: ["todos"],
          });
        },
      }
    );
  };

  const newTodoMutation = useMutation({
    mutationFn: async (newTodo: NewTodo) => {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      const todo = await response.json();
      return todo;
    },
  });

  return (
    <form onSubmit={handleSubmit} className="max-w-[640px] mx-auto pt-8 flex">
      <div className="border rounded">
        <input
          id="title"
          value={title}
          onChange={handleTitle}
          placeholder="제목 입력하세요"
          className="mt-1 p-2  rounded w-[100%]"
        />
        <input
          id="contents"
          value={contents}
          onChange={handleContents}
          placeholder="내용 입력하세요"
          className="mt-1 p-2  rounded w-[100%]"
        />
      </div>
      <button
        type="submit"
        className="hover:bg-[#36093f] text-2xl text-white py-2 px-4 rounded bg-purple-900"
      >
        +
      </button>
    </form>
  );
};

export default TodoForm;
