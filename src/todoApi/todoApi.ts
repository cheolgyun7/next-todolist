import { Todos } from "@/types/type";

const getTodo = async (): Promise<Todos[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/todos`
  );
  const { todos } = await response.json();
  return todos;
};

const toggleTodo = async ({ id, isDone }: { id: string; isDone: boolean }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/todos/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, isDone: !isDone }),
    }
  );
  const toggledTodo = await response.json();
  return toggledTodo;
};

const deleteTodo = async ({ id }: { id: string }) => {
  await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/todos/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
};
// route.ts에서 삭제시에 Response값을 null로 받기 때문에 return을 쓸 필요가 없음.
export { getTodo, deleteTodo, toggleTodo };
