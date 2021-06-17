class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleResetCounter = this.handleResetCounter.bind(this)
    this.state = {
      count: 0
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleResetCounter() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleResetCounter}>RESET</button>
      </div>
    )
  }
}

ReactDOM.render( <Counter />, document.getElementById('app'))

// let count = 0
// const addOne = () => {
//   count++
//   renderCounterApp()
// }

// const subOne = () => {
//   console.log("substract one")
//   count--
//   renderCounterApp()
// }

// const reset = () => {
//   count = 0
//   renderCounterApp()
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1> Count: {count}</h1>
//       <button id='plus-one' onClick={addOne}>+1</button>
//       <button onClick={subOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )

//   ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()
