import React, { useState } from 'react'
import './Toggle.css'
const Toggle = () => {
	const [isOn, setOn]= useState(false);

	const handletoggle=()=>{
	  setOn(!isOn);
	}
  return (
	
	  <div id='main' style={{backgroundColor:isOn?"#4caf50":"#f44336"}} onClick={handletoggle}>
			<div className={`child ${isOn?"On":"Off"}`}>
				<span>{isOn?"ON":"OFF"}</span>
			</div>
		</div>
  )
}

export default Toggle