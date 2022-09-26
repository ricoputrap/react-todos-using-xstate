import { Category, Color, TodosMachineContext, Todo } from "../types";

const loadInitialData = async (): Promise<TodosMachineContext> => {
  const response: Response = await fetch("data.json");
  const data: TodosMachineContext = await response.json();

  const colorLookup = data.colors.reduce((lookup, color) => {
    lookup[color.id] = color;
    return lookup;
  }, {} as Record<number, Color>);

  const categories: Category[] = data.categories.map(category => {
    const color: Color = colorLookup[category.color as number];

    return {
      ...category,
      color
    }
  });

  const categoryLookup = categories.reduce((lookup, category) => {
    lookup[category.id] = category;
    return lookup;
  }, {} as Record<number, Category>);

  const todos: Todo[] = data.todos.map(todo => {
    const category: Category = categoryLookup[todo.category as number];

    return {
      ...todo,
      category
    }
  });

  return {
    colors: data.colors,
    categories,
    todos
  }
}

export default loadInitialData;