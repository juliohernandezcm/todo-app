import { Footer } from '../Footer';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';

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
];

const totalTodos = todoList.length;

const completedTodos = todoList.filter(
	(todo) => todo.isCompleted === true
).length;

export const Layout = () => {
	return (
		<div className='grid grid-cols-1 grid-rows-[120px_minmax(400px,_1fr)_100px] h-screen'>
			<header className='p-2'>
				<TodoCounter total={totalTodos} completed={completedTodos} />
			</header>
			<main className='p-4'>
				<TodoSearch />
				<TodoList>
					{todoList.map((todo) => (
						<TodoItem
							key={todo.id}
							description={todo.description}
							completed={todo.isCompleted}
						/>
					))}
				</TodoList>
			</main>
			<footer className='self-end h-20'>
				<Footer />
			</footer>
		</div>
	);
};
