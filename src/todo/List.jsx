import React from 'react'
import { IoMdCheckmarkCircle} from "react-icons/io";
import { MdDelete } from "react-icons/md";

const List = ({handleDelete,checked,onHandleChecktodo, data}) => (
	<li className={` flex items-center justify-between bg-white rounded-xl shadow-md px-4 py-2 my-2 transition-all duration-200 hover:scale-105 `}
		>
		<span className={`text-black text-lg font-medium gap-1 ${checked ? "line-through" : "no-underline"}`}>
  {data}
</span>
		<div className="flex items-center gap-2">
			<button onClick={() => onHandleChecktodo(data)}><IoMdCheckmarkCircle /></button>
			<button onClick={() => handleDelete(data)}><MdDelete /></button>
		</div>
	</li>
)

export default List