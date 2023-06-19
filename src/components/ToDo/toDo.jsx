
import {BtnDeleteToDO} from './toDo.styled'

import React from 'react'

const ToDo = ({ todo, handleCheckCompleted, handleDelete }) => {
	return (
		<li className='list-group-item'>
			<div className='row justify-content-between'>
				<div className='col-10'>
					<input
						className='form-check-input me-2'
						type='checkbox'
						checked={todo.completed}
						onChange={() => handleCheckCompleted(todo.id)}
					/>
					{todo.title}
				</div>
				<div className='col'>
					<BtnDeleteToDO
						type='button'
						className='btn-close'
						aria-label='Close'
						onClick={() => handleDelete(todo.id)}
					></BtnDeleteToDO>
				</div>
			</div>
		</li>
	)
}

export default ToDo;