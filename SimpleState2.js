import React from 'react';

class App extends React.Component {
  constructor() {
     super();
     this.state = { 
        msg: 'this is the msg state', 
        count: 0 
     } 

     this.update = this.update.bind(this)  
  }  
  update(e) {
     this.setState({msg: e.target.value})
  }  
  render() {
    <div>
      <Widget msg={this.state.msg} update={this.update} /> 
      <Widget msg={this.state.msg} update={this.update} /> 
      <Widget msg={this.state.msg} update={this.update} /> 
    </div>
  }
}
    
const Widget = (props) => {
    return (
      <div>
        <input type="text" onChange={props.update} />
        <h1>{props.msg}</h1>
      </div>
    ) 
}

export default App;
 
