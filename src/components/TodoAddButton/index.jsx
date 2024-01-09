import { useContext } from 'react';
import './TodoAddButton.css';
import { TodoContext } from '../../context';

export const TodoAddButton = () => {
	const { setIsOpenTodoModal } = useContext(TodoContext);

	const handleClick = () => {
		setIsOpenTodoModal(true);
	};

	return (
		<div className='text-center self-end mb-3'>
			<button
				className='add__button rounded-lg px-4 py-2 w-5/6 my-4'
				onClick={() => handleClick()}
			>
				Agregar Tarea
			</button>
		</div>
	);
};
