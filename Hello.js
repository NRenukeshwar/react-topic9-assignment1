import React from 'react';
class Div extends React.Component{

  constructor()
  {
    super()
    console.log("Calling Constructor of Div")
  }
  
  componentDidMount() {
    console.log("Calling componentDidMount of Div")
  }

  componentDidUpdate()
  {
    console.log("Calling componentDidUpdate of Div")
  }

  componentWillUnmount() {
    console.log("Calling componentWillUnmount of Div")
  }

  render()
  {
    return(
      <div onClick={(event)=>this.props.removeDiv(event)}>
        <p>Thought for the Day {this.props.thought}</p>
      </div>
    )
  }
}
export default Div;