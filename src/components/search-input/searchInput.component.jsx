import { Component, Fragment } from "react";

class SearchInput extends Component {
  render() {
    const { inputSearchHandler } = this.props;
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
}

export default SearchInput;
