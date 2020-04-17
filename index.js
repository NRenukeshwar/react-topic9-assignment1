import React from 'react'
import ReactDOM from 'react-dom';
import Div from './DivComponent'
class App extends React.Component {

  constructor() {
    console.log("Calling Constructor of App")
    super();
    this.state = {
     thought:'If people are not laughing at your goals, your goals are too small.',
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

  componentWillUnmount()
  {
    console.log("Calling componentWillUnmount of App")
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
      <div align="center">
      {myheader}
      {!this.state.show &&<button onClick={(event)=>{this.showDiv(event)}}>Show Div</button>}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);