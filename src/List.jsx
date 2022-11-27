import { connect } from "react-redux"
import ItemList from "./components/ItemList"
import Input from "./components/Input"
import "./List.css"

const List = ({ value }) => {
    return (
        <div className="container">
            <h1 className="title">To do List</h1>
            <Input/>
            {value.map((item, index) => {
                return <ItemList key={item.id} Text={item.value} index={index}/>
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    value: state.Values.items,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(List)