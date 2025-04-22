import React,{useState} from 'react'
import './TodoEditor.css'
interface TodoCreate{
  onCreate:(content:string)=>void
}
const TodoEditor = ({onCreate}:TodoCreate) => {
  const [content, setContent]=useState<string>('')
  



  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{

    setContent(e.target.value)
  }

  const handleSubmit =()=>{
    if(!content.trim()) return

    onCreate(content)
    setContent('')
  }

  const onKeyEnter =(e:React.KeyboardEvent<HTMLInputElement>)=>{

    if(e.key==='Enter'){
      handleSubmit()
    }
  }


  
  return (
    <div className='Editor'>
      <input 
      onKeyUp={onKeyEnter}
      type="text" 
      value={content} onChange={onChange}/>
      <button onClick={handleSubmit}>추가</button>
    </div>
  )
}

export default TodoEditor