import React, { useState, useEffect, useReducer } from "react";
import axios from 'axios';

const Auth = props => {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [submittedTodo, setSubmittedTodo] = useState(null);
  // const [likeList, setLikeList] = useState([]);

  useEffect(() => {
    axios.get('https://testing-hooks-30059.firebaseio.com/todos.json')
      .then(res => {
        const todoDatas = res.data;
        const todos = [];
        for (const key in todoDatas) {
          todos.push({id: key, name: todoDatas[key].name})
        }
        console.log(todos);
        setTodoList(todos);
      })
      .catch(err => {
        console.log(err);
      })
    return () => {
    };
  }, [])

  useEffect(() => {
    if (submittedTodo) {
      setTodoList(todoList.concat(submittedTodo));
      console.log(todoList);
    }
    return () => {
    };
  }, [submittedTodo])

  const inputChangeHandler = event => {
    setTodoName(event.target.value);
  };

  const initialState = {claps: 0}

  const clapsReducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return {claps: state.claps + 1}
      case 'decrement':
        return {claps: state.claps - 1}
      default:
        return state;
    }
  }

  const [clapsState, dispatch] = useReducer(clapsReducer, initialState);

  const addTodoHandler = () => {
    axios.post('https://testing-hooks-30059.firebaseio.com/todos.json', {name: todoName})
      .then(res => {
        setTimeout(() => {
          const todoItem = {id: res.data.name, name: todoName};
          setSubmittedTodo(todoItem);
        }, 3000)
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <>
      <input
        type="text"
        placeholder="Your Name"
        value={todoName}
        onChange={inputChangeHandler}
      />
      <button onClick={addTodoHandler}>Add todo list</button>
      <ul>
        {todoList.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      <hr/>
      <hr/>
      Claps: {clapsState.claps}
      <button onClick={() => dispatch({type: 'increment'})}>Clap</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Unclap</button>
    </>
  );
};

export default Auth;