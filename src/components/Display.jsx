import {useContext} from 'react'
import {ResultContext} from '../context/ResultContext'
export const Display=({result})=>{
    const {theme}=useContext(ResultContext)
    return(
        <div className={`display ${theme}`}>{result}</div>
    )
}