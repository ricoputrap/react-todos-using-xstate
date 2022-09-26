import { AnyEventObject, assign, createMachine, interpret } from "xstate";
import loadInitialData from "../services/loadInitialData";
import { TodosMachineContext } from "../types";

const todosMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUFkCGBjAFgJYB2YAdADarYQlQDEGpZJAbqgNbloY4EnkqNOgjapc2ZIVTEA2gAYAuolAAHVLEJSZKkAA9EAZgBshsgA55AdmvHj5w-MMBGZwBoQAT0TOATM7JfKxMAFgBWEKtTU3MQgF8Ej2J0OF0eLDwiZiFaYihddU1tYl0DBBMPbwQwgE4yGvM-FytncJCQv0SQdL4s8gAnMBoqtQ0taRKkfUQO33qw2ONrGuMayJDjSsRfSLInGpsQlfNV+QaunsyBArHi0p9fLYQAWj89s475cxqw2prDQwJBJAA */
createMachine<TodosMachineContext>({
  context: { todos: [], categories: [], colors: [] },
  schema: {
    services: {} as {
      LOAD_INITIAL_DATA: {
        data: TodosMachineContext;
      };
    },
  },
  initial: "loading",
  states: {
    loading: {
      invoke: {
        src: "LOAD_INITIAL_DATA",
        onDone: [
          {
            actions: "SET_INITIAL_DATA",
            target: "ready",
          },
        ],
      },
    },
    ready: {
      type: "final",
    },
  },
  id: "todoMachine",
}, {
  services: {
    LOAD_INITIAL_DATA: loadInitialData
  },
  actions: {
    SET_INITIAL_DATA: assign((context: TodosMachineContext, event: AnyEventObject) => {
      return event.data;
    })
  }
});

// Instantiate the todosMachine (singleton)
export const todosService = interpret(todosMachine).start();