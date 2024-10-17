import axios from "axios";
import { Suspense, useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([])
    let timer;
    clearInterval(timer);
    timer = setTimeout(async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${value}`);
      setData(res.data);
    }, delay);

    return () => clearInterval(timer);
  }, [value, delay]);

  return data;
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const data = useDebounce(inputValue, 500);
  return (
    <>
      <input placeholder="search" onChange={(e) => {
        setInputValue(e.target.value)
      }} value={inputValue}></input>
      {data.map(todo => <div key={todo.id}>{todo.name}</div>)}
    </>
  );
}

export default App;