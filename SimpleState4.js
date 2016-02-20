import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
     super();
     this.state = { 
        red: 0, 
        green: 0, 
        blue: 0, 
        msg: 'this is the msg state'
     } 

     this.update = this.update.bind(this)  
  }  
  update(e) {
     this.setState({msg: e.target.value})
     this.setState({
        red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value, 
        green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value, 
        blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value 
     })  
  }  
  render() {
    <div>
      {this.state.msg} <hr />
      <Slider ref="red" update={this.update} /> 
      {this.state.red} <br />
      <Slider ref="green" update={this.update} /> 
      {this.state.green} <br />
      <Slider ref="blue" update={this.update} /> 
      {this.state.blue} <br />
    </div>
  }
}
    
class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref="inp" type="range" min="0" max="255"
               onChange={props.update} />
      </div>
    ) 
  } 
}

export default App;
 
