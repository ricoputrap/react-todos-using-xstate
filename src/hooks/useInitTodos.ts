import { useActor } from "@xstate/react";
import { useMemo } from "react";
import { todosService } from "../machines/todosMachine";
import { Todo } from "../types";

const useInitTodos = () => {
  const [state] = useActor(todosService);

  const isLoading = useMemo(() => state.matches("loading"), [state]);
  const todos: Todo[] = useMemo(
    () => state.context.todos,
    [state.context.todos]
  );

  return { todos, isLoading }
}

export default useInitTodos;