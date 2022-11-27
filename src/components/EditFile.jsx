import { connect } from "react-redux"
import { useState } from "react"
import AddItem from "../store/actions/AddItem"
import DeletItem from "../store/actions/DeletItem"
import "./EditFile.css"

const EditFile = ({ info, setInfo, value, Add, remove}) => {
    const [ newValue, setNewValue ] = useState(value[info.index].value)
    const Edit = value => {
        setInfo({show:false})
        if(value.trim() != ""){
            remove(info.index)
            Add(value)
        }
        else{
            alert("Digite algo para alterar o valor")
        }
    } 

    return (
        <div className="container_edit">
            <div className="edit_item">
                <h1>Edit Item</h1>
                <textarea value={newValue} onChange={e => setNewValue(e.target.value)}></textarea>
            <button className="btn-edit" onClick={() => Edit(newValue)}>Confirmar</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    value: state.Values.items
})

const mapDispatchToprops = dispatch => ({
    Add: value => dispatch(AddItem(value)),
    remove: index => dispatch(DeletItem(index))
})

export default connect(mapStateToProps,mapDispatchToprops)(EditFile)