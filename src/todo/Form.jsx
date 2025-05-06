import React from 'react'
import { useState } from 'react';
const Form = ({onAddTodo}) => {

	const [inpVal,setVal]=useState({});

	const handleInput=(value)=>{
		setVal({id:value,content:value,checked:false});
	}

	const handleonSubmit=(event)=>{
		event.preventDefault();
		onAddTodo(inpVal);
		setVal({id:"",content:"",checked:false});
	}
  return (
<section className='flex flex-col  gap-5 font-mono'>
	<form onSubmit={handleonSubmit}>
	<div>
		<input className='rounded-l-lg p-1 border-none outline-none' type="text" placeholder='Enter' autoComplete='off' value={inpVal.content}
			onChange={(event)=>{
				handleInput(event.target.value)
			}}
		/>
		<button type='submit' className='border-none bg-blue-400 rounded-r-lg p-1 text-white hover:bg-yellow-300'>Add Task</button>
		</div>
		</form>
		</section>
		
  )
}

export default Form