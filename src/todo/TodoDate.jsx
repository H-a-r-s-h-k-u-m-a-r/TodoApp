import React, { useEffect, useState } from 'react'



const TodoDate = () => {
	const [date, setDate]=useState('')
	useEffect(()=>{
		const interval=setInterval(() => {
		const now=new Date()
		const fdate=now.toLocaleDateString()
		const time= now.toLocaleTimeString().toUpperCase()
			setDate(`${fdate} - ${time}`)
		}, 1000);
		return()=>clearInterval(interval);
	},[])
  return (
	<h2 className='text-white font-bold'>{`${date}`}</h2>
  )
}

export default TodoDate