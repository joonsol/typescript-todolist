import React, { useState } from 'react'
import './styles/TodoEditor.css'
interface TodoCreate {
  onCreate: (content: string) => void
}
const TodoEditor = ({ onCreate }: TodoCreate) => {
  const [content, setContent] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }



  const handleSubmit = () => {
    if (!content.trim()) return

    onCreate(content)
    setContent('')
  }
  return (
    <div className="Editor">
      <input placeholder="새로운 Todo..."  value={content} onChange={onChange}/>
      <button onClick={handleSubmit}>추가</button>
    </div>
  )
}

export default TodoEditor