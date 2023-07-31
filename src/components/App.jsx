import Header from './Header/header';

// import ToDoList from './ToDoList/toDoList';
// import Modal from './Modal/modal';
// import LoginForm from './LoginForm/LoginForm';
import { nanoid } from 'nanoid';
// import Counter from './Counter/counter'
import { Component } from 'react';
import Search from './Search/Search';
import ContentInfo from './ContentInfo/ContentInfo';


class App extends Component {
  state = {
    isShowModal: false,
    searchText: '',
  };
  
  showModal = () => {
    this.setState({ isShowModal: true });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
  return newUser;
  };

  handleSearch = (searchText) => {
    this.setState({searchText})
  }

  render() {
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        <Search />
        <ContentInfo searchText={this.state.searchText} />
        {/* <Counter /> */}
        {/* <ToDoList />
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <LoginForm
              createUser={this.createUser}
              closeModal={this.closeModal}
            />
          </Modal>
        )} */}
      </div>
    );
  }
}

export default App;
