import { AiOutlinePlus } from "react-icons/ai"

import "./Input.css"

const Input = ({ getItem, value, addItem }) => {


    return (
        <form className="input_container"
            onSubmit={(e) => addItem(e)}>
            <input
                type="text"
                placeholder="Write here"
                value={value}
                onChange={(e) => getItem(e.target.value)} />
            <button type="submit"><AiOutlinePlus /></button>
        </form>
    )
}


export default Input
