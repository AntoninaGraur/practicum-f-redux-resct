import Header from './Header/header';


import ToDoList from './ToDoList/toDoList';
import Modal from './Modal/modal';
import LoginForm from './LoginForm/LoginForm';
import { nanoid } from 'nanoid';
// import Counter from './Counter/counter'
import { useState } from 'react';
import Search from './Search/Search';
import ContentInfo from './ContentInfo/ContentInfo';

import React from 'react';

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');

  const showModal = () => setIsShowModal(true);
  const closeModal = () => setIsShowModal(false);
  function createUser(data) {
    
    const newUser = {
      ...data,
      id: nanoid(),
    }
    console.log('newUser:>>', newUser);
  }

  const handleSearch = searchText => {
    setSearchText(searchText)
  };

  return (
    <div className="container">
      <Header showModal={showModal} />
      <Search handleSearch={handleSearch} />
      <ContentInfo searchText={searchText} />
      {/* <Counter /> */}
      <ToDoList />
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <LoginForm createUser={createUser} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default App;

// class App extends Component {
//   state = {
//     isShowModal: false,
//     searchText: '',
//   };

//   showModal = () => {
//     this.setState({ isShowModal: true });
//   };

//   closeModal = () => {
//     this.setState({ isShowModal: false });
//   };

//   createUser = data => {
//     const newUser = {
//       ...data,
//       id: nanoid(),
//     };
//   return newUser;
//   };

//   handleSearch = (searchText) => {
//     this.setState({searchText})
//   }

//   render() {
//     return (
//       <div className="container">
//         <Header showModal={this.showModal} />
//         <Search handleSearch={ this.handleSearch} />
//         <ContentInfo searchText={this.state.searchText} />
//         {/* <Counter /> */}
//         {/* <ToDoList />
//         {this.state.isShowModal && (
//           <Modal closeModal={this.closeModal}>
//             <LoginForm
//               createUser={this.createUser}
//               closeModal={this.closeModal}
//             />
//           </Modal>
//         )} */}
//       </div>
//     );
//   }
// }

// export default App;
