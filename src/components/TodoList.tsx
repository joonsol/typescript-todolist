import React from 'react'
import { Todo } from '../App'
import TodoItem from './TodoItem'

interface TodoProps{
  todos:Todo[],
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({todos,onDelete,onUpdate}:TodoProps) => {
  return (
    <div className="TodoList">
    <h4>Todo List 📝</h4>
    <div className="todos_wrapper">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  </div>
  )
}

export default TodoList