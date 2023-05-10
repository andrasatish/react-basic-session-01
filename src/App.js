import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users)=>{
        this.setState({users})
      })
  }

  render() {
    
    return (
      <div>
        {
         console.log(this.state.users) 
        }
      </div>
    );
  }
}

export default App;
