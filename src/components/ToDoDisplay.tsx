import React from 'react'
import { toDo } from '../todoInterface';
import DisplayCard from './DisplayCard';

interface Tododo{
    tododo:toDo[];
    setTododo:React.Dispatch<React.SetStateAction<toDo[]>>;
};

const ToDoDisplay:React.FC<Tododo> = ({tododo,setTododo}:Tododo) => {
  return (
    <div className='md:w-[80%] xs:w-[95%]'>
        {tododo.map((todo)=>(
          <DisplayCard key = {todo.id} todo = {todo} tododo = {tododo} setTododo={setTododo} />
        ))}
    </div>
  )
}

export default ToDoDisplay