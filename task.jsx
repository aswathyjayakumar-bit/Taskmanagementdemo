import React from 'react';

function task(props){ 
    const {completetask, deletetask } = props
    let taskArr = props.taskArr.length > 0 
    ? props.taskArr : JSON.parse(localStorage.getItem("tasks"))
    return (
        <div className="task">
            <ul>
                {taskArr && taskArr.length > 0 ?
                taskArr.map((el, i) => (
                  <li key={i}>
                    <div className={el["done"] ? "line.through": null}>{el.title}</div>
                    <div className="icon">
                        <i title="Complete" onClick={() => completetask(i)} className='fas fa-check-circle pointer ${el["done"] ? "green" : "blue"}' />
                        <i title="Delete" onClick={() => deletetask(i)} className='fas fa-trash-alt pointer' />
                    </div>
                  </li>
                )) : null
            }
            </ul>

        </div>
    );
}

export default task;