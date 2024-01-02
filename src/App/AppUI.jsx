import { Layout } from '../components/Layout/index.jsx';
import { Footer } from '../components/Footer/index.jsx';
import { TodoCounter } from '../components/TodoCounter/index.jsx';
import { TodoSearch } from '../components/TodoSearch/index.jsx';
import { TodoList } from '../components/TodoList/index.jsx';
import { TodoItem } from '../components/TodoItem/index.jsx';
import { TodoAddButton } from '../components/TodoAddButton/index.jsx';

export const AppUI = ({
	searchValue,
	setSearchValue,
	searchedTodos,
	totalTodos,
	completedTodos,
	toggleCompleteTodos,
	deleteTodos,
}) => {
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
};
