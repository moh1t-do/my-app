import { atom, selector } from 'recoil';

export const networkAtom = atom({
    key: "networkAtom",
    default: 112
});

export const jobAtom = atom({
    key: "jobAtom",
    default: 13
});

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 42
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 67
});

export const meSelector = selector({
    key: "meSelector",
    get: ({ get }) => {
        const network = get(networkAtom);
        const job = get(jobAtom);
        const messaging = get(messagingAtom);
        const notification = get(notificationAtom);

        return network + job + messaging + notification;
    }
})