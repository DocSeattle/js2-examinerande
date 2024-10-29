import { createContext } from "react";

export const SelectionContext = createContext({
    select: 0,
    setSelect: () => {}
});
