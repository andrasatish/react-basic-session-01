import { Component, Fragment } from "react";
import "./App.css";
import Users from "./components/users/users.component";
import SearchInput from "./components/search-input/searchInput.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchText:''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users });
      });
  }
  
  searchHandler = (event)=>{
    const searchText = event.target.value.toLowerCase();
    this.setState({searchText});
  }

  render() {
    const { users, searchText } = this.state;
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchText));
    return (
      <Fragment>
         <SearchInput inputSearchHandler = {this.searchHandler} />
         <Users listUsers = {filteredUsers} searchKey='test'/>
      </Fragment>
    );
  }
}

export default App;
