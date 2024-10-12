import { useState, memo } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>{`Click Me !! ${count}`}</button>
      <Header title="Hi There 1" />
      <Header title="Hi There 2" />
    </>
  );
}

const Header = memo(function ({ title }) {
  console.log("Header Rendered", title);
  return <h1>{title}</h1>;
});

export default App;