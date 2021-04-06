import React, {useState} from 'react';
import task from './task'
import swal from "sweetalert"

function Createtask() {

const [task, settask] = useState({title: "", done: false})
const [taskArr, settaskArr] = ([])

let tasks = localStorage.hasOwnProperty("tasks")
 ? JSON.parse(localStorage.getItem("tasks"))
 : []

 const onChange = (event) => {
     let {value} = event.target
     let obj = {}
     obj["title"] = value
     obj["done"] = false
     settask(obj)
    }

    const Createtask = (event) => {
        const {name} = event.target
        if(event.key === "Enter" || name === "Add"){
            if(task.title !== ""){
              tasks.unshift(task)
              localStorage.setItem("tasks", JSON.stringify(tasks))
              settask({title:"", done: false})
            }else{
             swal("Oops", "please write task first", "error")
            }
        }
    }

const completetask = (i) => {
    if(tasks[i]["done"] !== true){
        tasks[i]["done"] = true
        localStorage.setItem("tasks", JSON.stringify(tasks))
        settaskArr(tasks)
        swal("Good job!", "Task completed", "Success");
   }
}

const deletetask = (i) => {
  swal({
     title: "Are you sure?",
     text: "Once deleted, you will not be able to recover this file",
     icon: true,
     dangerMode: true
  }).then(res =>{
      if(res){
        tasks.splice(i, 1)
        localStorage.setItem('tasks', JSON.stringify(task))
        settaskArr(tasks)
      }
  })
}

     return (
        <>
        <div className="box">
            <div className="text.end">
                <h2>Taskmanagemet App</h2>
                <h4>Add a New Task</h4>
                
            </div>
            <div className="text.Add">
                <input type="text" name="Task" placeholder="Add a Task"
                value={task.title} onKeyPress={Createtask} onChange={onChange} />
                <button className="btn-Add" type="button" name="Add" onClick={Createtask}>Add</button>
            </div>

        </div>
        <task taskArr={taskArr} 
        completetask={completetask}
        deletetask={deletetask} />
        </>
     );
};

export default Createtask;