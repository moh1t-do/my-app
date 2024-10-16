
import { networkAtom, jobAtom, messagingAtom, notificationAtom, meSelector } from "../store/atoms/CountAtom";
import { useRecoilValue } from "recoil"

function Home() {
    const network = useRecoilValue(networkAtom);
    const job = useRecoilValue(jobAtom);
    const messaging = useRecoilValue(messagingAtom);
    const notification = useRecoilValue(notificationAtom);
    const me = useRecoilValue(meSelector);

    return (
        <div className="flex gap-4 items-center justify-between">
            <button>My Network {network >= 100 ? "100+" : network}</button>
            <button>Jobs {job}</button>
            <button>Messaging {messaging}</button>
            <button>Notification {notification}</button>
            <button>Me {me}</button>
        </div>
    );
}

export default Home;