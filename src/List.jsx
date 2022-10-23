import { useEffect, useState } from "react"

import Input from "./components/Input"
import ItemList from "./components/ItemList"
import "./List.css"

const List = () => {
    const [ listFinal, setListFinal ] = useState([])
    const [ item, setItem ] = useState("")

 
    const addItem = (e) =>   {
        e.preventDefault()
        if (item == " " || item == "" || item.trim() == "") {
           alert("Prencha o campo abaixo!")
        }
        else {
            setListFinal([...listFinal, item.trim()])
            setItem("")
        }
    }

    const removeItem = (index) => {
        let newList = [...listFinal]
        newList.splice(index,1)
        setListFinal(newList)

    }

    return (
        <div className="container">
            <h1 className="title">To do List</h1>
            <Input  
            getItem={setItem}
            value={item}
            addItem={addItem}/>
            
            {listFinal.length > 0 && listFinal.map((itemText, index) => < ItemList 
            key={index} 
            index={index}
            Text={itemText} 
            removeItem={removeItem}
           />)}
            {/* list={listFinal}
            setList={setListFinal} */}
        </div>
    )
}

export default List