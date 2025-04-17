import React,{useState} from 'react'
interface TodoCreate{
  onCreate:(content:string)=>void
}
const TodoEditor = ({onCreate}:TodoCreate) => {
  const [ content, setContent]=useState<string>('')

  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setContent(e.target.value)
  }



  const handleSubmit=()=>{
    if(!content.trim()) return

    onCreate(content)
    setContent('')
  }
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✍</h4>
      <div className="editor_wrapper">
        <input value={content} onChange={onChange} placeholder="할 일을 입력하세요" />
        <button onClick={handleSubmit}>추가</button>
      </div>
    </div>
  )
}

export default TodoEditor