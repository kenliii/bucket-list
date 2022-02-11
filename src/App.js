import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import Todo from './Todo';
import {db} from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); // code will stop the refresh 
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1> ✨ My Bucket List ✨ </h1>
      
      <form>
          <FormControl>
          <InputLabel><span role="img" aria-label="emoji">✅ </span> Add to Bucketlist</InputLabel>
          <Input value={input} onChange={Event => setInput(Event.target.value)} />
          <FormHelperText>We'll keep it safe here <span role="img" aria-label="emoji">😌</span> </FormHelperText>
        </FormControl>
        
          <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}> Add </Button>

      </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo} />

        ))}
      </ul>
    </div>
  );
}

export default App;
