import { Component } from 'react';



class FormToDo extends Component {
    state = {
      todo:"",
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleSubmit = e => {
      e.prevent.default();
      this.props.addToDo(this.state.todo);
    this.setState({
      todo: '',
    });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label">
              Create To Do
            </label>
            <input
              name="todo"
              type="text"
              className="form-control"
              id="exampleInput"
              onChange={this.handleChange}
              value={this.state.todo}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add To Do
          </button>
        </form>
      </>
    );
  }
}

export default FormToDo;
