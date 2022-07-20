import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai';

interface toDo{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;
};

const InputField = ({todo, setTodo,handleAdd}:toDo) => {
  return (
    <form className='relative md:w-[80%] xs:w-[95%]' onSubmit={handleAdd} >
        <input value = {todo} onChange = {(e)=>setTodo(e.target.value)} type = "text" className='text-[21px] w-full outline-none p-4 pl-7 pr-[20%] border-0 rounded-[100px]' placeholder = "Write To Do" />
        <button type ="submit" className='text-white text-[18px] absolute m-2 mr-3 right-0 bg-[#E27D60] w-[60px] h-[50px] rounded-[100px] hover:shadow-lg hover:bg-[#E8A87C] '>
          <AiOutlinePlus className='mx-auto' />
        </button>
    </form>
  )
}

export default InputField