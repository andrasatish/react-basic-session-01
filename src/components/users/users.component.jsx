import { Fragment } from "react";
import User from "../user/user.component";

function Users(props){
  const { listUsers } = props;
  return (
    <Fragment>
        <div className="users-container">
          {listUsers.length ? (
            listUsers.map((user) => <User user={user} key={user.id} />)
          ) : (
            <h1
              style={{
                color: "white",
                textAlign: "center",
                display: "block",
                width: "100%",
              }}
            >
              Search Results Not Found!
            </h1>
          )}
        </div>
      </Fragment>
  )
}

export default Users;
