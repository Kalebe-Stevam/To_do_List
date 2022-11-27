import { connect } from "react-redux"
import AddItem from "../store/actions/AddItem"
import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import "./Input.css"

const Input = ({ Add }) => {
    const [ value, setValue ] = useState("")
    const addItem = e => {
        e.preventDefault()
        if(value.trim() != ""){
            Add(value)
            setValue("")
        }
        else{
            alert("Preencha o campo abaixo!")
        }
    }

    return (
        <form className="input_container" onSubmit={e => addItem(e)}>
            <input 
            onChange={e => setValue(e.target.value)} 
            value={value}
            placeholder="Write here"/>
            <button type="submit"><AiOutlinePlus /></button>
        </form>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToprops = dispatch => ({
    Add: value => dispatch(AddItem(value)) 
})

export default connect(mapStateToProps, mapDispatchToprops)(Input)