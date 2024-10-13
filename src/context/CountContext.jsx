import { useState, createContext, useContext } from "react";

const CountContext = createContext({
    count: 0,
    increment: () => {},
    decrement: () => {},
});

export function useCount() {
    return useContext(CountContext);
}

export function CountProvider({ children }) {
    const [count, setCount] = useState(0);
    const increment = () => setCount((c) => c + 1);
    const decrement = () => setCount((c) => c - 1);
    return <CountContext.Provider value={{ count, increment, decrement }}>{children}</CountContext.Provider>;
}