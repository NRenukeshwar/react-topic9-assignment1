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
        <p>--Thought for the Day--</p>
        <h2 style={{color:"seagreen"}}>{this.props.thought}</h2>
        <p style={{color:"blue"}}>--Azim Premji</p>
      </div>
    )
  }
}
export default Div;