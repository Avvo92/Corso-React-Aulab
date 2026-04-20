import { createContext, useContext } from "react";

export const ListContext = createContext(null);

export function useListContext() {
    const ctx = useContext(ListContext);
    if (!ctx) {
        throw new Error("I componenti List devono essere usati dentro <List>");
    }
    return ctx;
}
