import React,{useState} from 'react'
import { Todo } from '../App'
import './styles/TodoList.css'
import TodoItem from './TodoItem'

interface TodoProps{
  todos:Todo[],
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({todos,onDelete,onUpdate}:TodoProps) => {
  const [search, setSearch]= useState('')


  const getFilteredData=()=>{
    if(search===''){
      return todos;
    }
    return todos.filter((todo)=>
        todo.content.toLowerCase().includes(search.toLowerCase())
      )
  }

  const onChangeSearch =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
  }
  const filteredTodos =getFilteredData()
  
  return (
    <div className="TodoList">
    <h4>Todo List 🌱</h4>
    <input placeholder="검색어를 입력하세요"  value={search} onChange={onChangeSearch}/>
    <div className="todos_wrapper">
      {filteredTodos.map((todo)=>(
        <TodoItem 
       todo={todo}
        key={todo.id}
        onDelete={onDelete}
        onUpdate={onUpdate}
        />
      ))}
    </div>
  </div>
  )
}

export default TodoList