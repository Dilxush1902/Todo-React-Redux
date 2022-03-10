import React from 'react';
import {useSelector} from "react-redux";

const TodosFooter = () => {
	const todo = useSelector(item=>item)
	const handleSave = (e) => {
	  localStorage.setItem("Todo",JSON.stringify(todo))
	}

	return (
		<div className="card-footer">
			<button onClick={handleSave} className="btn btn-primary">Save</button>
		</div>
	);
};

export default TodosFooter;