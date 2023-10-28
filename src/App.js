import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [inputVal, setInputval] = useState('');
  const [todoKey, setTodoKey] = useState(null);
  const [todoArray, setTodos] = useState([]);

  function AddToods() {
    if (inputVal != '') {

      setTodos((prev) => [...prev, inputVal]);
      setInputval('');
    }

  }

  function EditTodo(val, key) {
    setTodoKey(key);
    setInputval(val)
    // console.log(key);
    // console.log(val);
  }

  function updatetodo() {
    if (todoKey != null && inputVal!='') {
      let newarr = [...todoArray];
      newarr[todoKey] = inputVal;
      setTodos(newarr);
      setInputval('');
    }
  }

  function deltodos(Key) {

    setTodos((prev => {
      let newarray = prev.filter((val, i) => {
        if (i != Key) {
          return val;
        }
      })

      return newarray;
    }))
  }

  function Deleteall() {
    setTodos([]);
  }

  console.log(todoArray);
  return (
    <div >
      <h3>Todo App</h3>
      <input onChange={(e) => setInputval(e.target.value)} value={inputVal} />
      &nbsp;&nbsp;&nbsp; <button onClick={AddToods}> Add</button>
      &nbsp;&nbsp;&nbsp; <button onClick={updatetodo}> Update</button>
      &nbsp;&nbsp;&nbsp; <button onClick={Deleteall}> Delete All</button>
      <br />
      <ul>
        {
          todoArray.map((e, i) => {
            return <li key={i}>{e}  &nbsp;&nbsp;&nbsp;<button onClick={() => EditTodo(e, i)}>Edit</button>
              &nbsp;&nbsp;&nbsp; <button onClick={() => deltodos(i)}> -</button>
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
