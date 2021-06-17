class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }
  handleToggleVisibility() {
    this.setState(() => {
      return {
        // if (visibility) {
        //   visibility: false
        // } else {
        // }
        visibility: true
      }
    })
    console.log('Hund')
  }
  render() {
    return (
      <div>
       <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.visibility ? 'Hide Details' : 'Show Details' }
        </button>
        {this.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
     </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   )

//   ReactDOM.render(jsx, document.getElementById('app'))
// }

// render()
