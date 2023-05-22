import { Fragment } from "react";

function SearchInput(props) {
    const { inputSearchHandler } = props;
    return (
      <Fragment>
        <div className="search-container">
          <input
            className="search-input-field"
            placeholder="username"
            onChange={inputSearchHandler}
          />
        </div>
      </Fragment>
    );
}

export default SearchInput;
