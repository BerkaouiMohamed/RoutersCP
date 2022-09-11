import Todo from "./Todo"
import './ListTodo.css'
const ListTodo=({jobs})=>{
return(<>



<div className="list">

{jobs.map((job)=>{<Todo title={job.title} isDone={job.isDone} />

})}

</div>
</>

)

}
export default ListTodo