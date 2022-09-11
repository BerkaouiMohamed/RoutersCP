import ListTodo from './comp/ListTodo';
import AddTodo from './comp/AddTodo';
import { useState } from 'react';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([
    
  ]);

  const add=(job)=>setJobs([...jobs,job])
  return (
    <div className="App">
    <AddTodo add={add}/>
    <ListTodo jobs={jobs} />

    </div>
  );
}

export default App;
