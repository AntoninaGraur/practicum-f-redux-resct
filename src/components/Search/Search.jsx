import { Component } from 'react';
import { SearchFormInput, SearchBtn, SearchForm } from './Search.styled';

class Search extends Component {
  state = {
    value: '',
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  };

  render() {
    return (
      <>
        <SearchForm role="search" onSubmit={this.handleSubmit}>
          <SearchFormInput
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <SearchBtn type="submit">Search</SearchBtn>
        </SearchForm>
      </>
    );
  }
}

export default Search;
