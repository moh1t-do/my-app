import { useCount } from "../context/CountContext";

function Home() {
    const { count } = useCount();
    return <h1>{`Current count is ${count}`}</h1>;
}

export default Home;
