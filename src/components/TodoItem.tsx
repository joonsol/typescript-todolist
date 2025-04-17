import React from 'react'
import {Todo} from '../App'

interface TodoItemProps{
  todo:Todo,
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({todo, onDelete,onUpdate}:TodoItemProps) => {
  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => onUpdate(todo.id)}
      />
      <div className="content">{todo.content}</div>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </div>
  )
}

export default TodoItem