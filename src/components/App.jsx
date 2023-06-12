import { Component } from 'react'
import Header from './Header/header'
// import Counter from './Counter/Counter'
import ToDoList from './ToDoList/toDoList'
import Modal from './Modal/modal'
import Counter from './Counter/counter'

class App extends Component {
	state = {
		isShowModal: false,
	}

	showModal = () => {
		this.setState({ isShowModal: true })
	}

	closeModal = () => {
		this.setState({ isShowModal: false })
	}

	render() {
		return (
			<div className='container'>
				<Header showModal={this.showModal} />
				<Counter />
				<ToDoList />
				{this.state.isShowModal && (
					<Modal closeModal={this.closeModal}>Some</Modal>
				)}
			</div>
		)
	}
}

export default App