import { useEffect, useState } from 'react';
import ToDo from '../ToDo/toDo';

import toast from 'react-hot-toast';

import { UlListToDo } from './toDoList.styled';
import FormToDo from 'components/FormToDo/FormToDo';

import { nanoid } from 'nanoid';

const ToDoList = () => {
  const [todoList, setTodoList] = useState('');

  useEffect(() => {
    const localTodo = localStorage.getItem('todo');
    if (localTodo) setTodoList(JSON.parse(localTodo));
  }, []);

  useEffect(() => {
    todoList && localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList]);

  const handleCheckCompleted = id => {
    setTodoList(prevTodoList => {
      return prevTodoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const handleDelete = id => {
    setTodoList(prevTodoList => {
      return prevTodoList.filter(todo => todo.id !== id);
    });
    toast.error('Successfully deleted');
  };

  const addToDo = value => {
    setTodoList(prevTodoList => {
      return [
        ...prevTodoList,
        { id: nanoid(), title: value, completed: false },
      ];
    });
    toast.success('Successfully added to list');
  };

  return (
    <>
      <h1>My To-Do list</h1>
      <FormToDo addToDo={addToDo} />
      {todoList && (
        <UlListToDo>
          {todoList.map(todo => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={handleCheckCompleted}
              handleDelete={handleDelete}
            />
          ))}
        </UlListToDo>
      )}
    </>
  );
};

export default ToDoList;

// class ToDoList extends Component {
//   state = {
//     todoList: '',
//     isDelete: false,
//     isCreate: false,
//   };

//   componentDidMount = () => {
//     // localStorage.setItem('todo', JSON.stringify(todo));
//     if (localStorage.getItem('todo'))
//       this.setState({ todoList: JSON.parse(localStorage.getItem('todo')) });

//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.todoList.length > this.state.todoList.length) {
//       localStorage.setItem('todo', JSON.stringify(this.state.todoList));
//       this.setState({ isDelete: true, todo: localStorage.getItem('todo') });
//       setTimeout(() => {
//         this.setState({ isDelete: false });
//       }, 1500);
//     }
// if (prevState.todoList.length < this.state.todoList.length) {
//   localStorage.setItem('todo', JSON.stringify(this.state.todoList));
//   this.setState({ isCreate: true, todo: localStorage.getItem('todo') });
//       setTimeout(() => {
//         this.setState({ isCreate: false });
//       }, 2500);
//     }
//   }
//   handleCheckCompleted = id => {
//     this.setState(prevState => ({
//       todoList: prevState.todoList.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       ),
//     }));
//   };

//   handleDelete = id => {
//     this.setState(prev => ({
//       todoList: prev.todoList.filter(todo => todo.id !== id),
//     }));
//   };

//   addToDo = value => {
//     this.setState(prev => {
//       return {
//         todoList: [
//           ...prev.todoList,
//           { id: nanoid(), title: value, completed: false },
//         ],
//       };
//     });
//   };
//   render() {
//     return (

//         <>
//           <h1>My To-Do list</h1>
//           {this.state.isDelete && (
//             <div className="alert alert-warning" role="alert">
//               To Do Succsessfully deleted!
//             </div>
//           )}
//           {this.state.isCreate && (
//             <div className="alert alert-success" role="alert">
//               Create is Succsessfully!
//             </div>
//           )}
//         <FormToDo addToDo={this.addToDo} /> {this.state.todoList && (<UlListToDo>
//           {this.state.todoList.map(todo => (
//             <ToDo
//               key={todo.id}
//               todo={todo}
//               handleCheckCompleted={this.handleCheckCompleted}
//               handleDelete={this.handleDelete}
//             />
//           ))}
//         </UlListToDo>)}
//         </>
//       )

//   }
// }

// export default ToDoList;
