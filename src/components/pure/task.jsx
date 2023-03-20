import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

import "../../styles/task.scss"
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task }) => {


  useEffect(() => {
    console.log("tarea creada")

  
    return () => {
      console.log(`tasK: ${task.name} is goin to unmount`)
    }
  }, [task]);

  /** funcion que retorna una badge segun el level de la task */
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return(
          <h6 className='mb-0'>
          <span className='badge bg-primary'>
            {task.level}
          </span></h6>
        );
    
      case LEVELS.URGENT:
        return(
          <h6 className='mb-0'>
          <span className='badge bg-warning'>
            {task.level}
          </span></h6>
        )
    
      case LEVELS.BLOKING:
        return(
          <h6 className='mb-0'>
          <span className='badge bg-danger'>
            {task.level}
          </span></h6>
        )
    
      default:
        break;
    }
  }

/**funcion que retorna icono dependiendo si esta completa o no la tarea */
  function taskIconCompleted() {
    if(task.completed){
      return (<i className='bi-toggle-on' style={{color: 'green'}}></i>)
    } else {
      return (<i className='bi-toggle-off' style={{color: 'grey'}}></i>)
    }
  }
  

  return (

    <tr className='fw-normal'>
      <th>
        <span className='ms-2'>{task.name}</span>
      </th>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>
        {taskLevelBadge()}
      </td>
      <td className='align-middle'>
      {taskIconCompleted()}

      <i className='bi-trash' style={{color: 'tomato', fontSize: '20px'}}></i>

      </td>

    </tr>
  );
};


TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
