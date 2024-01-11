import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage('todos_v1', []);

	const [searchValue, setSearchValue] = useState('');
	const [showModal, setShowModal] = useState(false);

	const searchedTodos = todos.filter((todo) => {
		const todoDescription = todo.description
			.toLocaleLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '');

		const searchText = searchValue
			.toLocaleLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '');

		return todoDescription.includes(searchText);
	});

	const addTodo = (description) => {
		const newTodo = {
			id: crypto.randomUUID(),
			description,
			isCompleted: false,
		};

		const updatedTodos = [...todos];
		updatedTodos.push(newTodo);

		saveTodos(updatedTodos);
	};

	const totalTodos = todos.length;

	const completedTodos = todos.filter(
		(todo) => todo.isCompleted === true
	).length;

	const toggleCompleteTodos = (id) => {
		const updatedTodos = [...todos];

		const todoIndex = updatedTodos.findIndex((todo) => todo.id === id);

		updatedTodos[todoIndex].isCompleted =
			!updatedTodos[todoIndex].isCompleted;

		saveTodos(updatedTodos);
	};

	const deleteTodos = (id) => {
		const updatedTodos = [...todos];

		const todoIndex = updatedTodos.findIndex((todo) => todo.id === id);

		updatedTodos.splice(todoIndex, 1);

		saveTodos(updatedTodos);
	};

	return (
		<TodoContext.Provider
			value={{
				searchValue,
				setSearchValue,
				searchedTodos,
				totalTodos,
				completedTodos,
				toggleCompleteTodos,
				deleteTodos,
				loading,
				error,
				showModal,
				setShowModal,
				addTodo,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export { TodoContext, TodoProvider };
