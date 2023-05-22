import {  Fragment } from "react";

function User(props){
  const { user } = props;
  return (
    <Fragment>
        <div className="user-container">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
        </div>
      </Fragment>
  )
}

export default User;
