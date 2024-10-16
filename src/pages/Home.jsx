import { useEffect } from "react";
import { countState } from "../store/atoms/CountAtom";
import { useRecoilValue } from "recoil"

function Home() {
    const count = useRecoilValue(countState);
    useEffect(() => { 
        
    }, [])
    console.log("rerender Home");
    return <h1>{`Current count is ${count}`}</h1>;
}

export default Home;
