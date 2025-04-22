import React ,{useState}from 'react'
import './TodoList.css'
import { Todo } from '../App'
import TodoItem from './TodoItem'
interface Props {
  todos: Todo[];
  onUpdate: (id: number) => void
  onDelete: (id: number) => void
}

const TodoList = ({ todos, onUpdate, onDelete }: Props) => {
  const [search, setSearch]=useState<string>('')
  
  

const getFilteredData=()=>{
  if(search===''){
    return todos

  }
  return todos.filter((todo)=>
  todo.content.toLowerCase().includes(search.toLowerCase())
  )
}
const onChangeSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{

  setSearch(e.target.value)
}

const filteredTodos = getFilteredData()

  return (
    <div className='TodoList'>
      <h4>Todo List 📝</h4>
      <input placeholder="검색어를 입력하세요"  value={search} onChange={onChangeSearch}/>
 
      <div className="todos_wrapper">
        {filteredTodos.map((todo, i) => (
          <TodoItem 
          key={i}
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