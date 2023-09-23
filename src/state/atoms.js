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

export const itemsPerPageState = atom({
    key: "itemsPerPage",
    default: 10
})