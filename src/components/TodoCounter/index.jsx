import { useContext } from 'react';
import { TodoContext } from '../../context';

export const TodoCounter = () => {
	const { totalTodos, completedTodos } = useContext(TodoContext);
	return (
		<header className='p-2 mb-4'>
			<div className='flex flex-col items-center'>
				<h1 className='my-4 text-2xl'>TODO APP</h1>
				<p className='text-xl'>
					Haz completado {completedTodos} de {totalTodos} tareas
				</p>
			</div>
		</header>
	);
};
