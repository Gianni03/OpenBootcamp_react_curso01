import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class'


const TaskForm = ({add}) => {


  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e){
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.valueOf,
      descriptionRef.current.valueOf,
      false,
      levelRef.current.valueOf
    );
    add(newTask)

  }

  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
    <div className='form-outline flex-fill'>
      <input type="text" ref={nameRef} id="inputName" className='form-control form-control-lg' required autoFocus placeholder='Task Name'/>

      <input type="text" ref={descriptionRef} id="inputDescription" className='form-control form-control-lg' required placeholder='Task Description'/>

      <label htmlFor="selectLevel" className=' sr-only'>Prioridad</label>
      <select name="" id="selectLevel" ref={levelRef} defaultValue={LEVELS.NORMAL}>
        <option value={LEVELS.NORMAL}>Normal</option>
        <option value={LEVELS.URGENT}>Urgente</option>
        <option value={LEVELS.BLOKING}>Blocking</option>
      </select>

      <button type='submit' className=' btn btn-success btn-lg m-2'>Agrgar</button>

    </div>
  

      
    </form>
  );
}

TaskForm.protoType = {
  add: PropTypes.func.isRequired
}

export default TaskForm;
