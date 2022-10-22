import { BsPencilSquare, BsCheck2Circle } from "react-icons/bs"
import { IoRemoveCircleOutline } from "react-icons/io5"
import { useState } from "react"


import "./ItemList.css"

const ItemList = ({ Text }) => {
    const [isChecked, setIsChecked] = useState("")
    const [onOf, setonOf] = useState(true)

    return (
        <>
            {onOf === true &&
                <div className={`container_items${isChecked}`}>
                    <button className="btn">
                        <BsPencilSquare />
                    </button>
                    <div className="content">
                        <p>
                            {Text}
                        </p>
                    </div>
                    <div className="btn_left">
                        <button className="btn" onClick={()=> setonOf(false)}>
                            <IoRemoveCircleOutline />
                        </button>
                        <button
                            className="btn"
                            onClick={() => { isChecked == "" ? setIsChecked(" checked") : setIsChecked("") }} >
                            <BsCheck2Circle />
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default ItemList