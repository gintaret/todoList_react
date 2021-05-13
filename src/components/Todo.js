import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
    const [tasks, setTasks] = useState([
        {
            text: 'Clean your room',
            isCompleted: false
        },
        {
            text: 'Do your homework',
            isCompleted: true
        },
        {
            text: 'To go to the cinema',
            isCompleted: true
        }
    ]);

    const insertTodo = text => {
        const newTodo = [...tasks, {text}]; //newTodo kintamajame bus pries tai suvestos visos uzduotys plius nauja ateinanti is vaikinio komponento
        setTasks(newTodo);  //nauja reiksme = newTodo kintamasis
    }

    return (
        <div>
            <div className="table table-dark mt-5">
                 {tasks.map((task, index) =>(
                    <TodoList key={index} task={task} index={index}/>
                ))}
            </div>
            <TodoForm insertTodo={insertTodo}/>
        </div>
    )
}

export default Todo

//sis failas yra tevinis kitiems dviems failams (todoform ir todolist)
//29 eiluteje props; map metodas reikalauja key, del to jis cia yra
//mapinimas nebutinai turi buti cia, gali buti jis atliekamas ir vaikiniame elemente
//mapinimas tai ciklo sukimas
//grizome is todoform
//33 eil: <TodoForm insertTodo={insertTodo}/> metodo iskvietimas keliauja kaip propsas
//21 eil: i input lauka ivesime nauja reiksme
//22 eil: kai noriu i state prideti papildoma informacija ir kad nedingtu pries tai suvesti duomenys, turiu susikurti vietines reiksmes kintamaji newTodo
//22 eil: NewTodo bus lygus = [... tasks- pasidarau kopija savo uzduociu
//22 eil: , {text}] - prie savo uzduociu kopijos pridedu tai, kas ateina is input lauko
//23 eil: nauja reiksme uzsetinu su setTasks(newTodo)
//23 eil: newTodo - metodas, kuris ides i state nauja reiksme
//ivedeme tiesiai i psl papildomu uzduociu, bet parefreshinus psl liks tik pirmos trys, nes jos kaip initial state reiksmes, kadangi jas ivedem i koda
