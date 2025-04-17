import './App.css';
import { useState, useRef ,useEffect} from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';

export interface Todo {
  id: number,
  content: string,
  isDone:boolean
}
function App() {

  const idRef = useRef<number>(1)

  const [todos, setTodos] = useState<Todo[]>([])


const onCreate=(content:string)=>{
  const newItem :Todo={
    id:idRef.current++,
    content,
    isDone:false
  }
  setTodos([newItem,...todos])
}
const onUpdate=(targetId:number)=>{
  setTodos(
    todos.map((todo)=>
      todo.id ===targetId? {...todo, isDone:!todo.isDone}:todo
    )
  )
}
const onDelete =(targetId:number)=>{
  setTodos(todos.filter((todo)=>todo.id!==targetId))
}





  useEffect(()=>{

  },[todos])


  return (

    <div className="App">
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList  
      todos={todos}
      onUpdate={onUpdate}
      onDelete={onDelete}
      />    
    </div>
  );
}

export default App;
