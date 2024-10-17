import { useState, useEffect } from 'react'
import axios from 'axios'

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTodos = async () => {
      setLoading(true);
      setTodos([]);
      await new Promise(resolve => setTimeout(resolve, 2000));
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(res.data);
      setLoading(false);
    }
    getTodos();
    const interval = setInterval(getTodos, n * 1000);
    return () => {
      clearInterval(interval);
      setTodos([]);
    }
  }, [n]);

  return { todos, loading };
}

function App() {
  const { todos, loading } = useTodos(4);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
    </>
  );
}

export default App;