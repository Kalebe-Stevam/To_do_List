import { useState } from "react"

import Input from "./components/Input"
import ItemList from "./components/ItemList"
import "./List.css"

const List = () => {
    const [ listFinal, setListFinal ] = useState([])

    

    return (
        <div className="container">
            <h1 className="title">To do List</h1>
            <Input 
            ListFinal={setListFinal} />
            
            {listFinal.length > 0 && listFinal.reverse().map((itemText, index) => < ItemList 
            key={index} 
            Text={itemText} />)}
        </div>
    )
}

export default List