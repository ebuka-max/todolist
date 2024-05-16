import React, { useState } from 'react'
import { v4 } from 'uuid'

const TodoInput = ({ items, setItems }) => {
  const [title, setTitle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(title)
    setTitle("")
    console.log(title);
  }

  const addItem = (title) => {
    setItems([...items, { title, id: v4() }])
  }

  return (
    <div className='card card-body my-3'>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text bg-primary text-white'>
              <i className='fa fa-book'></i>
            </div>
          </div>
          <input
            type='text'
            className='form-control text-capitalize'
            placeholder='add a todo item'
            value={title}
            onChange={(e) =>setTitle(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block btn-primary mt-3'>
        add item
      </button >
      </form>

      {/* <button type='submit' className='btn btn-block btn-primary mt-3' onClick={addItem}>
        add item
      </button > */}

      <h1>lets try</h1>
    </div>
  )
}

export default TodoInput
