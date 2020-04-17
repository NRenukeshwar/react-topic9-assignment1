import React from 'react'
import ReactDOM from 'react-dom';
import Div from './Hello'
class Clock extends React.Component {

  constructor() {
    console.log("Calling Constructor of App")
    super();
    this.state = {
     thought:'Sun rises in east',
     show:true 
    }
  }

  componentDidMount() {
    console.log("Calling componentDidMount of App")
  }

  componentDidUpdate()
  {
    console.log("Calling componentDidUpdate of App")
  }

  removeDiv=(event)=>{
    event.preventDefault();
    this.setState({show: !this.state.show});
  }

  showDiv=(event)=>{
    event.preventDefault();
    this.setState({show: !this.state.show});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Div thought={this.state.thought} removeDiv={this.removeDiv} />;
    };
    return (
      <div>
      {myheader}
      {!this.state.show &&<button onClick={(event)=>{this.showDiv(event)}}>Show Div</button>}
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);