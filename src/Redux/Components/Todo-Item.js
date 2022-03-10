import React from 'react';
import {useDispatch} from "react-redux";
import {remove} from "../action/todos";
import {done} from "../action/todos";

const TodoItem = ({name,id,isDone}) => {
const dispatch = useDispatch()
	const handleChange = (e) => {
  dispatch(done(id))
}
	return (
			<li className="list-group-item d-flex justify-content-between align-items-center">
				<div className="form-check">
					<input className="form-check-input" type="checkbox" onChange={handleChange} />

					{isDone ?
						<label className="text-decoration-line-through form-check-label">
							{name}
						</label>
						:
						<label className="form-check-label">
							{name}
						</label>
					}
				</div>
				<button onClick={()=>dispatch(remove(id))}  className="text-end btn btn-danger">Delete</button>
			</li>
	);
};

export default TodoItem;