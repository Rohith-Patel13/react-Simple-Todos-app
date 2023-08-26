import {Component} from 'react'

import './index.css'

import TodoItem from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {updatedResults: initialTodosList}

  deleteTodo = idNum => {
    const {updatedResults} = this.state
    const filteredData = updatedResults.filter(
      eachTodoObject => eachTodoObject.id !== idNum,
    )

    this.setState({
      updatedResults: filteredData,
    })
  }

  render() {
    const {updatedResults} = this.state
    console.log(updatedResults)
    return (
      <div className="bg">
        <div className="innerCard">
          <h1 className="heading">Simple Todos</h1>

          <ul className="ulContainer">
            {updatedResults.map(eachObject => (
              <TodoItem
                eachTodoProp={eachObject}
                deleteTodoProp={this.deleteTodo}
                key={eachObject.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
