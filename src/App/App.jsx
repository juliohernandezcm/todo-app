import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { AppUI } from './AppUI.jsx';
import './App.css';

// const todoList = [
// 	{
// 		id: crypto.randomUUID(),
// 		description: 'Estudiar React',
// 		isCompleted: false,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		description: 'Hacer la Cama',
// 		isCompleted: false,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		description: 'Leer sobre integration test',
// 		isCompleted: true,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		description: '¿Qué día es mañana',
// 		isCompleted: false,
// 	},
// ];

// localStorage.setItem('todos_v1', JSON.stringify(todoList));

// localStorage.removeItem('todos_v1');

function App() {
	const [todos, saveTodos] = useLocalStorage('todos_v1', []);

	const [searchValue, setSearchValue] = useState('');

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
		<AppUI
			todos={todos}
			saveTodos={saveTodos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			searchedTodos={searchedTodos}
			totalTodos={totalTodos}
			completedTodos={completedTodos}
			toggleCompleteTodos={toggleCompleteTodos}
			deleteTodos={deleteTodos}
		/>
	);
}

export { App };
