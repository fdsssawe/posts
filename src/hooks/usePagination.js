import {useMemo} from "react";

export const usePagination = (totalPages , page) =>{
    let pagesArray = []
    useMemo(()=>{
        for (let i = 0; i <totalPages ; i++) {
            pagesArray.push(i+1)
        }
    },[totalPages , page])
    return pagesArray
}