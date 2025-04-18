import React from 'react'
import { Todo } from '../App'
import './styles/TodoList.css'
import TodoItem from './TodoItem'

interface TodoProps{
  todos:Todo[],
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({todos,onDelete,onUpdate}:TodoProps) => {
  return (
    <div className="TodoList">
    <h4>Todo List 🌱</h4>
    <input placeholder="검색어를 입력하세요" />
    <div className="todos_wrapper">
      
    </div>
  </div>
  )
}

export default TodoList