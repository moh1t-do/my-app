
import { networkAtom, jobAtom, messagingAtom, notificationAtom, meSelector } from "../store/atoms/CountAtom";
import { todoAtom } from "../store/atoms/todoAtom";
import { useRecoilValue } from "recoil"

function Home() {
    const todos = useRecoilValue(todoAtom);

    return (
        <div>
            {todos.map((todo) => <div key={todo.id}>{JSON.stringify(todo)}</div>)}
        </div>
    );
}

export default Home;