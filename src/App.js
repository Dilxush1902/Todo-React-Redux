import React, {useEffect} from 'react';
import Todo from "./Redux/Todo";
import {useDispatch} from "react-redux";
import {local} from "./Redux/action/todos";

const App = () => {
    const dispatch = useDispatch();
useEffect(()=>{
    const data =localStorage.getItem("Todo")
    dispatch(local(JSON.parse(data)))
},[])
    return (
     <>
        <Todo/>
     </>
  );
};

export default App;