import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Todo } from '../types'

type Props = {
  todos: Todo[]
}

const Todos: React.FC<Props> = ({ todos }) => {  
  return (
    <Stack rowGap="4px" minWidth="280px">
      {todos.map(todo => (
        <div key={ todo.id }>{ todo.title }</div>
      ))}
    </Stack>
  )
}

export default Todos