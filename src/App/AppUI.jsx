import { Layout } from '../components/Layout/index.jsx';
import { Footer } from '../components/Footer/index.jsx';
import { TodoCounter } from '../components/TodoCounter/index.jsx';
import { TodoSearch } from '../components/TodoSearch/index.jsx';
import { TodoList } from '../components/TodoList/index.jsx';
import { TodoItem } from '../components/TodoItem/index.jsx';
import { TodoAddButton } from '../components/TodoAddButton/index.jsx';
import { TodoLoading } from '../components/TodoLoading/index.jsx';
import { TodoEmpty } from '../components/TodoEmpty/index.jsx';
import { TodoContext } from '../context/index.jsx';
import { ModalWrapper } from '../components/ModalWrapper/index.jsx';
import { useContext } from 'react';
import { TodoModal } from '../components/TodoModal/index.jsx';

export const AppUI = () => {
	const {
		loading,
		error,
		searchedTodos,
		toggleCompleteTodos,
		deleteTodos,
		isOpenTodoModal,
	} = useContext(TodoContext);
	return (
		<Layout>
			<TodoCounter />
			<main className='grid grid-rows-[120px_minmax(400px,_1fr)_100px]'>
				<TodoSearch />
				{loading && <TodoLoading />}
				{error && <p>Opps hubo un error...</p>}
				{!loading && searchedTodos.length === 0 && <TodoEmpty />}
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
				<ModalWrapper>{isOpenTodoModal && <TodoModal />}</ModalWrapper>
			</main>
			<Footer />
		</Layout>
	);
};
