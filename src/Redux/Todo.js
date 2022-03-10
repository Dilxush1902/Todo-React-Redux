import React from 'react';
import TodosFooter from "./Components/Todos-Footer";
import TodosList from "./Components/Todos-List";
import TodosForm from "./Components/Todos-Form";
import TodosHeader from "./Components/Todos-Header";

const Todo = () => {
	return (
		<div className="card w-50 mx-auto mt-5">
			<TodosHeader/>
			<TodosForm/>
			<TodosList/>
			<TodosFooter/>
		</div>
	);
};

export default Todo;