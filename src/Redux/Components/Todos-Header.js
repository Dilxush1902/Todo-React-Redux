import React from 'react';
import {useSelector} from "react-redux";

const TodosHeader = () => {
	const todo = useSelector(item=>item)
	return (
		<div className="card-header">
			<h3>Todos:{todo.length}</h3>
		</div>
	);
};

export default TodosHeader;