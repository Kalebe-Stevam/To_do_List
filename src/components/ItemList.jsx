import { useState } from "react"
import { connect } from "react-redux"
import DeletItem from "../store/actions/DeletItem"
import { BsPencilSquare, BsCheck2Circle } from "react-icons/bs"
import { IoRemoveCircleOutline } from "react-icons/io5"
import EditFile from "./EditFile"
import "./ItemList.css"


const ItemList = ({ Text, index, remove }) => {
    const [showEdit, setshowEdit] = useState({index:null, show:false})
    const [isChecked, setIsChecked] = useState("")
    return (
        <div className={`container_items${isChecked}`}>
            <button className="btn" onClick={() => setshowEdit({show:true, index:index})}>
                <BsPencilSquare />
            </button>
            <div className="content">
                <p>
                    {Text}
                </p>
            </div>
            <div className="btn_left">
                <button className="btn remove" onClick={() => remove(index)}>
                    <IoRemoveCircleOutline />
                </button>
                <button
                    className="btn check"
                    onClick={() => { isChecked == "" ? setIsChecked(" checked") : setIsChecked("") }} >
                    <BsCheck2Circle />
                </button>
            </div>
            { showEdit.show == true &&
            <EditFile info={showEdit} setInfo={setshowEdit}/>}
        </div>

    )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    remove: index => dispatch(DeletItem(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)