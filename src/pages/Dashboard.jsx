import { memo, useMemo } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { countState, evenOddSelector } from "../store/atoms/CountAtom";

function Dashboard() {
    console.log("rerender Dashboard");
    const count = useRecoilValue(countState);
    const evenOdd = useRecoilValue(evenOddSelector);

    return (
        <div>
            <p>Current count is {evenOdd}</p>
            <p>count is {count}</p>
            <ButtonGroup />
        </div>
    )
}

const ButtonGroup = memo(function () {
    console.log("rerender ButtonGroup");
    const setCount = useSetRecoilState(countState);
    return (
        <div className="flex items-center justify-between gap-4 my-4">
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <button onClick={() => setCount(c => c - 1)}>Deccrement</button>
        </div>
    )
})

export default Dashboard;