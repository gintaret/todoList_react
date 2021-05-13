import React from 'react'

const TodoList = ({task, index}) => {
    return (
        <div className="row">
           <div className="col">{index+1}</div> 
           <div className="col">{task.text}</div>
           <div className="col">{task.isCompleted ? 'Done' : 'In progress...'}</div>
        </div>
    )
}

export default TodoList

//sis failas yra atsakingas uz duomenu atvaizdavima
//3 eilute parametruose (tarp skliausteliu) nurodome props, ToDoList atsinesa propsa
//8 eil trumpesnis if uzrasymas: jeigu uzduotis yra true, atspausdink Done, jeigu false, atspausdink In progress.
//8 eil sintakse: ? true : false