import React, { Component } from 'react'
import ToDo from '../ToDo/toDo'
import todo from '../../todo.json'

import {UlListToDo} from './toDoList.styled'
import FormToDo from 'components/FormToDo/FormToDo';

import { nanoid } from 'nanoid';

class ToDoList extends Component {
	state = {
		todoList: todo,
	}

	handleCheckCompleted = (id) => {
		this.setState((prevState) => ({
			todoList: prevState.todoList.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			),
		}))
	}

	handleDelete = (id) => {
		this.setState((prev) => ({
			todoList: prev.todoList.filter((todo) => todo.id !== id),
		}))
	}

	addToDo = (value) => {
		this.setState((prev) => {
			return {
				todoList: [...prev.todoList, { "id": nanoid(), "title": value, "completed": false}]
			}
		})
	}
	render() {
		return (
			<>
				<h1>My To-Do list</h1>
				<FormToDo addToDo={ this.addToDo} />
				<UlListToDo>
					{this.state.todoList.map((todo) => (
						<ToDo
							key={todo.id}
							todo={todo}
							handleCheckCompleted={this.handleCheckCompleted}
							handleDelete={this.handleDelete}
						/>
					))}
				</UlListToDo>
			</>
		)
	}
}

export default ToDoList;