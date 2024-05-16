import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ items, setItems, clearList }) => {

 
  return (
    <ul className='list-group my-5'>
      <h3 className='text-capitalize text-center'>todo list</h3>
      {items.map((item) => {
        return <TodoItem item={item} key={item.id} />
      })}

      <button className='btn btn-danger btn-block text-capitalize mt-5' onClick={clearList
      }>
        clear list
      </button>
    </ul>
  )
}

export default TodoList
