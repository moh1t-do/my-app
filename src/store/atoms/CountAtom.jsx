import { atom, selector } from "recoil";

export const countState = atom({
    key: "countState",
    default: 0,
});

export const evenOddSelector = selector({
    key: "evenOddSelector",
    get: ({ get }) => {
        const count = get(countState);
        return count % 2 === 0 ? "even" : "odd";
    },
});