import React, { useState } from 'react'
import {BsPencil, BsCheck2Circle,BsTrash,BsPencilFill} from 'react-icons/bs'
import {toDo} from '../todoInterface'

interface Tododo{
    todo:toDo;
    tododo:toDo[];
    setTododo:React.Dispatch<React.SetStateAction<toDo[]>>;
};

const DisplayCard:React.FC<Tododo> = ({todo,tododo,setTododo}:Tododo) => {

    const [edit,setEdit] = useState<boolean>(false);
    const [newValue,setValue] = useState<string>(todo.task);
    const handleComplete = (id:number) =>{
        setTododo(tododo.map((setComplete=>setComplete.id === id?{...todo, complete:!setComplete.complete}:setComplete)));
    };

    const handleDelete = (id:number)=>{
        setTododo(tododo.filter((filterId)=> filterId.id !== id));
    };

    const handleEdit = (id:number)=>{
        setEdit(false);
        setTododo(tododo.map((editTodo)=>editTodo.id === id ? {...todo, task:newValue === ""?editTodo.task : newValue}:editTodo));
        console.log(tododo);
        
    };

    return (
    <div className='w-full h-[150px] mb-3'>
        <div className='flex flex-row md:px-[35px] px-[15px] mx-auto text-white text-[21px] w-[100%] h-full bg-[#E27D60] border-[1px] border-[#E27D60] rounded-[10px]'>
            <div className='mr-auto flex items-center md:w-[70%] sm:w-[60%] xs:w-[55%] xs:w-auto'>
                {
                    edit ? (
                        <input value = {newValue} onChange = {(e)=>setValue(e.target.value)} className='text-black py-[5px] rounded-[100px] outline-none indent-4 placeholder:indent-[1rem] lg:w-[100%] xs:w-[100%]' placeholder={todo.task} type = "text" autoFocus = {true}/>
                    ):(
                        todo.complete ? (
                            <span className='overflow-hidden line-through'>{todo.task}</span>
                        ):(
                            <span className='overflow-hidden'>{todo.task}</span>
                        )
                    )
                }
            </div>
            <div className='ml-auto lg:space-x-6 xs:space-x-2 flex items-center'>
                <button onClick = {()=>handleComplete(todo.id)}><BsCheck2Circle size = {25}/></button>
                {
                    edit ?
                    (
                        <button onClick={()=>handleEdit(todo.id)}><BsPencilFill size = {25} /></button>
                    ):
                    (
                        <button onClick={()=>setEdit(true)}><BsPencil size = {25}/></button>
                    )
                }
                <button onClick={()=>handleDelete(todo.id)}><BsTrash size = {25}/></button>
            </div>
        </div>
    </div>
  )
}

export default DisplayCard