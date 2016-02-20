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
    var value = this.state.value;
    return (
      <div>
        <input type="text" onChange={this.update} />
        <h1>{this.state.msg}</h1>
      </div>
    ) 
  }
}
    
export default App;
 
