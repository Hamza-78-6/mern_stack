import React from 'react'
import "./index.css"
import ListItem from './components/ListItem';
function App() {
  return (
<>
<section className='body'>
<h1>Coding with ZASH</h1>
  <section className='list'>
  <h1>To-Do List</h1>
  <ListItem />
  <input placeholder='add new task'/>
  <button>Add</button>
  </section>

</section>
</>
  )
}

export default App;