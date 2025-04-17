import React from 'react'
import { Todo } from '../App'
interface TodoProps{
  todos:Todo[],
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({todos}:TodoProps) => {
  return (
    <div>TodoList</div>
  )
}

export default TodoList