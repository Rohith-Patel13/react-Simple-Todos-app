// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodoProp, deleteTodoProp} = props
  const {id, title} = eachTodoProp

  const deleteItem = () => {
    deleteTodoProp(id)
  }

  return (
    <li className="listContainer">
      <div>
        <p>{title}</p>
      </div>
      <button type="button" className="btnEl" onClick={deleteItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
