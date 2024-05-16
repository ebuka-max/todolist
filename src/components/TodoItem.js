import React from 'react'

const TodoItem = ({item}) => {
  return (
    <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
      <h6>{item.title}</h6>
      <div className='todo-icon'>
        <span className='mx-2 text-success'>
          <i className='fa fa-pencil'></i>
        </span>
        <span className='mx-2 text-danger'>
          <i className='fa fa-trash'></i>
        </span>
      </div>
    </li>
  )
}

export default TodoItem
