import React, { useState, useEffect  } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {


  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

  // estado del componente
  const [task, setTask] = useState([defaultTask]);
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
      <div>
        <h1>
        Your Task: 
        </h1>
      </div>
      {/* TODO aplicar un for/loop para renderizar una lista */}
      <TaskComponent task={ defaultTask }></TaskComponent>
    </div>
  );
};





export default TaskListComponent;
