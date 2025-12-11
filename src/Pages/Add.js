import { useParams } from "react-router-dom"

export const Add=()=>{
    const { resId } = useParams();
    return(
        <>
            <h1>Add {resId}</h1>
        </>
    )
}