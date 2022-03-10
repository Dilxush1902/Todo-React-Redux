import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {add} from "../action/todos";



const TodosForm = () => {
	const inputRef = useRef(null);
	const formReset = useRef(null);
	const dispatch = useDispatch()
	const onSubmit = (e) => {
		e.preventDefault();
		if (inputRef.current.value.length >0) {
			dispatch(add(inputRef.current.value));
			formReset.current.reset()
		}
	}
	return (
		<div className="card-body">
			<form className="row" onSubmit={onSubmit} ref={formReset}>
				<div className="col-auto">
					<label htmlFor="inputPassword2" className="visually-hidden">Password</label>
					<input type="text" ref={inputRef} className="form-control" id="inputPassword2" placeholder="Example..." />
				</div>
				<div className="col-auto">
					<button type="submit" className="btn btn-success mb-3">ADD</button>
				</div>
			</form>
		</div>

);
};

export default TodosForm;