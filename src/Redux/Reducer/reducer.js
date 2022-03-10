import { v4 as uuidv4 } from 'uuid';
const initialState=[
	{id:1,name:"Apply",isDone:false},
	{id:2,name:"Banana",isDone:false},
	{id:3,name:"Cherry",isDone:false},
]
export const reducer = (state=initialState,action) => {
	switch (action.type) {
		case "ADD": {
			const newArr = {name:action.payload,id:uuidv4(),isDone:false}
			return [...state,newArr]
		}
		case "REM": {
			return state.filter(item => item.id !== action.payload)
		}
		case "DONE":{
			const newArr = state.map((item) => {
				if (item.id === action.payload) {
					return {...item,isDone: !item.isDone}
				} else {
					return item
				}
			})
			return [...newArr]
		}
		case "LOC":{
			return action.payload
		}
		default:
			return state
	}
}