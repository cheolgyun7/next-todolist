import { deleteTodo, toggleTodo } from "@/todoApi/todoApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useTodoMutations = () => {
  const queryClient = useQueryClient();

  const toggleTodoMutation = useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      console.log("!@3");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleDeleteButton = (id: string) => {
    deleteTodoMutation.mutate({ id });
    console.log("33");
  };

  const handleToggleButton = (id: string, isDone: boolean) => {
    toggleTodoMutation.mutate({ id, isDone });
  };

  return { handleDeleteButton, handleToggleButton };
};

export default useTodoMutations;
