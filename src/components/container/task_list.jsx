import React, { useState, useEffect  } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import "../../styles/task.scss"
import TaskForm from '../pure/forms/TaskForm';

const TaskListComponent = () => {


  const defaultTask1 = new Task('Example1', ' description1', true, LEVELS.NORMAL);
  const defaultTask2 = new Task('Example2', 'description2', false, LEVELS.URGENT);
  const defaultTask3 = new Task('Example3', 'description3', false, LEVELS.BLOKING);

  // estado del componente
  const [task, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  // control del ciclo de vida
  useEffect(() => {
    console.log("modificacion de tareas")
    setLoading(false);
    return () => {
      console.log("task lis comp to unmount")
    };
  }, [task]);


  const changeCompleted = (id) => {
    console.log("to do: cambiar estado de una tarea")
  }

  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          <div className='card-header p-3'>
          <h5>Your Task:</h5>
          </div>
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', heigth: '400px'} }>
          <table>
            <thead>
              <tr>
                <th scope='col'>Title</th>
                <th scope='col'>Description</th>
                <th scope='col'>Level</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* iterar sobre una lista de tareas */}
              { task.map((task, index) => {
                return (
                  <TaskComponent key={index} task={ task }>
                  </TaskComponent>
                )
              } )}
              

            </tbody>
          </table>
          </div>
          <TaskForm></TaskForm>
        </div>
      
      </div>
      {/* TODO aplicar un for/loop para renderizar una lista */}
      {/* <TaskComponent task={ defaultTask }></TaskComponent> */}
    </div>
  );
};





export default TaskListComponent;
