import { useState, useEffect, useMemo, memo, useCallback, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [n, setN] = useState(0);
  const inputRef = useRef();

  function handleDelay() {
    setTimeout(() => {
      inputRef.current.value = 100;
    }, 6000);
  }

  useEffect(() => {
    handleDelay();
  }, []);


  function handleClick() {
    setCount(count + 1);
  }

  function handleInputChange(event) {
    setN(event.target.value);
  }

  const greet = useCallback(() => {
    return "Hello There";
  }, [])


  return (
    <>
      <input ref={inputRef} type="number" value={n} onChange={handleInputChange} />
      <button onClick={handleClick}>{`Click Me !!`}</button>
      <Greet greet={greet} />
      <Header title={`Current count is ${count}`} />
      <Header title="Hi There 1" />
    </>
  );
}

const Header = memo(function ({ title }) {
  console.log('Render from', title);
  return <h1>{title}</h1>;
});

const Greet = memo(function ({ greet }) {
  console.log('Render from', greet);
  return <h1>{greet()}</h1>
})

export default App;