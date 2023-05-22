import { Component, Fragment, useEffect, useState } from "react";
import "./App.css";
import Users from "./components/users/users.component";
import SearchInput from "./components/search-input/searchInput.component";

function App() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
      });
  },[]);
  
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchText)
  );

  const searchHandler = (event)=>{
    const searchText = event.target.value.toLowerCase();
    setSearchText(searchText);
  }

  return (
    <Fragment>
      <SearchInput inputSearchHandler = {searchHandler} />
      <Users listUsers = {filteredUsers} searchKey='test'/>
    </Fragment>
  );
}

export default App;
