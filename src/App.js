import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'


function App() {

  const[items, setItems]=useState([
  
  ])

  const clearList = () => {
    setItems({
      items:[]
    })
  }


  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'>todo input</h3>
            <TodoInput items={items} setItems={setItems} />
            <TodoList items={items} setItems={setItems} clearList={clearList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
