import { atom } from "recoil";
import { ListModes } from "../enums/ListMode";


export const listModeState = atom({
    key: "listMode",
    default: ListModes.LIST,
})

export const currentPageState = atom({
    key: "currentPage",
    default: 1,
})

export const listItemsPerPageState = atom({
    key: "listItemsPerPage",
    default: 10
})

export const gridItemsPerPageState = atom({
    key: "gridItemsPerPage",
    default: 12
})