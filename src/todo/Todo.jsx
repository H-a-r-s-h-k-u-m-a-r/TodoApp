import React, { useEffect, useState } from 'react'
import Form from './Form';
import List from './List';
import Date from './TodoDate';


const Todo = () => {
	const todokey= "reactTodo"
	const [task, setTask]=useState(()=>{
		const rawTodo=localStorage.getItem(todokey);
		if(!rawTodo)return[];
		return JSON.parse(rawTodo);
	});
	

	localStorage.setItem(todokey,JSON.stringify(task))

	const handleonSubmit = (inpVal)=>{
		const {id,content,checked}=inpVal
		const ifTodoMatched = task.find((currElem)=>{
			currElem.content===content
		});
		console.log(inpVal)
		if(!content) return;
		if(ifTodoMatched)return;
		setTask((prev)=>[...prev, {id,content,checked}]);
		
	}

	
 const handleCheck=(taskk)=>{
	const checktodo = task.map((currElem)=>{
		if(currElem.content===taskk)
			return{...currElem, checked: !currElem.checked}
		else{
			return currElem;
		}	
	})
	setTask(checktodo)
 }
 const handleDelete=(value)=>{
		const updatedTask=task.filter((currElem)=>currElem.content!== value)
		setTask(updatedTask)
 }
 const handleClear=()=>{
	setTask([])
 }
	
	
  return (
	<section className='flex flex-col justify-center items-center gap-5 font-mono'>
		<header >
		<h1 className='text-white text-4xl font-bold '>Todo List</h1>
		<Date />
		</header>
		<Form onAddTodo={handleonSubmit}/>
		<section className='flex flex-col w-full gap-5 '>
		<ul >
		{
			task.map((currElem)=>{
				return(
					<List key={currElem.id}
					checked= {currElem.checked}
					data={currElem.content} handleDelete={handleDelete}
					onHandleChecktodo = {handleCheck}
					/>
					)
			})
		}
		</ul>
		<button className='bg-white rounded-lg' onClick={handleClear}>Clear All</button>
	</section>
	</section>
	
  )
}

export default Todo