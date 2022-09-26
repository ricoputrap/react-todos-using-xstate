import { Actor } from "xstate";

export type Color = {
  id: number;
  name: string;
}

export type Category = {
  id: number;
  name: string;
  color: Color | number;
}

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  category: Category | number;
  ref?: Actor;
}

export type TodosMachineContext = {
  todos: Todo[];
  categories: Category[];
  colors: Color[];
}