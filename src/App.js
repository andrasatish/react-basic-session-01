import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users });
      });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <div className="search-container">
          <input className="search-input-field" placeholder="username" />
        </div>
        <div className="users-container">
          {users.map((user) => (
            <div key={user.id} className="user-container">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.address.city}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
