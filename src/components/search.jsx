import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.search(event.target.value)
  }

  render() {
    return (
      <input type="text" className="form-control form-search"
        onChange={this.handleChange}/>
    )
  }
}

export default SearchBar;
