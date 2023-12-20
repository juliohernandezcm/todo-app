import { useState } from 'react';
import './App.css';
import { Layout } from './components/Layout';
import { Footer } from './components/Footer';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoAddButton } from './components/TodoAddButton';

const todoList = [
	{
		id: crypto.randomUUID(),
		description: 'Estudiar React',
		isCompleted: false,
	},
	{
		id: crypto.randomUUID(),
		description: 'Hacer la Cama',
		isCompleted: false,
	},
	{
		id: crypto.randomUUID(),
		description: 'Leer sobre integration test',
		isCompleted: true,
	},
	{
		id: crypto.randomUUID(),
		description: '¿Qué día es mañana',
		isCompleted: false,
	},
];

function App() {
	// useState: todos
	const [todos, setTodos] = useState(todoList);

	// useState: searchValue
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

	// Estados derivados: totalTodos, completedTodos
	const totalTodos = todos.length;
	const completedTodos = todos.filter(
		(todo) => todo.isCompleted === true
	).length;

	// toggleCompleteTodos
	const toggleCompleteTodos = (id) => {
		const updatedTodos = [...todos];

		const todoIndex = updatedTodos.findIndex((todo) => todo.id === id);

		updatedTodos[todoIndex].isCompleted =
			!updatedTodos[todoIndex].isCompleted;

		setTodos(updatedTodos);
	};

	// deleteTodos
	const deleteTodos = (id) => {
		const updatedTodos = [...todos];

		const todoIndex = updatedTodos.findIndex((todo) => todo.id === id);

		updatedTodos.splice(todoIndex, 1);

		setTodos(updatedTodos);
	};

	return (
		<Layout>
			<TodoCounter total={totalTodos} completed={completedTodos} />
			<main className='p-4'>
				<TodoSearch
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
				<TodoList>
					{searchedTodos.map((todo) => (
						<TodoItem
							key={todo.id}
							description={todo.description}
							completed={todo.isCompleted}
							toggleCompleteTodos={toggleCompleteTodos}
							deleteTodos={deleteTodos}
							id={todo.id}
						/>
					))}
				</TodoList>
				<TodoAddButton />
			</main>
			<Footer />
		</Layout>
	);
}

export { App };
