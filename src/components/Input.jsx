import { AiOutlinePlus } from "react-icons/ai"
import { useState, useEffect } from "react"

import "./Input.css"

const Input = ({ ListFinal }) => {
    const [textContent, setTextContent] = useState("")
    const [list, setList] = useState([])    

    const addList = (e) => {
        e.preventDefault()
        if (textContent.search("  ") > -1 || textContent == " " || textContent == ""){
            alert("Digite algo ou remova os espaços duplos")
        }
        else {
            setList([...list, textContent])
            setTextContent("")
        }
    }

    useEffect(() => {
        ListFinal([...list])
        setTextContent("")
    }, [list])

    return (
        <form className="input_container" onSubmit={addList}>
            <input type="text" value={textContent} placeholder="Write here" onChange={(e) => setTextContent(e.target.value)} />
            <button type="submit"><AiOutlinePlus /></button>
        </form>
    )
}


export default Input
