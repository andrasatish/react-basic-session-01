import { Component, Fragment } from "react";

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <Fragment>
        <div className="user-container">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
        </div>
      </Fragment>
    );
  }
}

export default User;
