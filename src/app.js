class IndesicionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: []
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handleAddOption(option) {
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const pickedOption = this.state.options[randomNum]
    alert(pickedOption)
  }

  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of a machine.'

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}


class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}>
            What shall I do?
        </button>
      </div>
    )
  }
}


class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options here:</p>
        <ol>
          {this.props.options.map((option) => <Option key={option} optionText={option} />)}
        </ol>
        <button onClick={this.props.handleDeleteOptions}>
          Remove all options
        </button>
      </div>
    )
  }
}


class Option extends React.Component {
  render() {
    return (
     <div>
      Option: {this.props.optionText}
     </div>
    )
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
  }
  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()

    if (option) {
      this.props.handleAddOption(option)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option'></input>
          <button>Add option</button>
        </form>
      </div>

    )
  }
}


ReactDOM.render( <IndesicionApp />, document.getElementById('app'))
