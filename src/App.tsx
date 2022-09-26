import React from "react"
import { Box, Spinner } from "@chakra-ui/react";
import Todos from "./components/Todos";
import useInitTodos from "./hooks/useInitTodos";

function App() {
  const { isLoading, todos } = useInitTodos();

  return (
    <Box padding="20px" background="E6E6E6">
      {isLoading ? <Spinner /> : <Todos todos={ todos } />}
    </Box>
  )
}

export default App
