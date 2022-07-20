import React, { useState } from 'react';
import './App.css'
import InputField from './components/InputField';
import ToDoDisplay from './components/ToDoDisplay';
import { toDo } from './todoInterface';


const App:React.FC = () =>{

  const [todo,setTodo] = useState<string>("");
  const [tododo,setTododo] = useState<toDo[]>([]);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTododo([...tododo,{id:Date.now(),task:todo,complete:false}]);
      setTodo('');
    };
  }

  return (
    <div className="App lg:w-[80%] xs:w-[100%] mx-auto pt-[10%] font-robotoMono min-h-screen overflow-auto flex flex-col items-center gap-y-7">
      <h1 className='text-[50px] text-white'>TODO</h1>
      <InputField todo={todo} setTodo = {setTodo}  handleAdd = {handleAdd} />
      <ToDoDisplay tododo={tododo} setTododo = {setTododo} />
    </div>
  );
}

export default App;
