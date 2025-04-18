import './App.css';
import { useState, useRef ,useEffect} from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
export interface Todo {
  id: number,
  isDone:boolean,
  content: string,
  date:string

}
const mockData:Todo[] = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().toISOString(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().toISOString(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().toISOString(),
  },
];
function App() {

  const idRef = useRef<number>(1)

  const [todos, setTodos] = useState<Todo[]>(mockData)


const onCreate=(content:string)=>{
  const newItem :Todo={
    id:idRef.current++,
    content,
    isDone:false,
    date:new Date().toISOString()
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
