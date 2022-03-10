import React from 'react';
import TodoItem from "./Todo-Item";
import {useSelector} from "react-redux";

const TodosList = () => {
	const todo = useSelector(item => item)
	console.log(todo)
	return (
			<ul className="list-group list-group-flush">
				{todo.length ? todo.map(item => (
					<TodoItem key={item.id} {...item}/>
				)) : <h5 className="text-center p-1">Empty</h5>
				}
			</ul>
	);
};

export default TodosList;