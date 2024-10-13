import { useCount } from "../context/CountContext";

function Dashboard() {
    const { increment } = useCount();
    return <button onClick={increment}>increment</button>;
}

export default Dashboard;