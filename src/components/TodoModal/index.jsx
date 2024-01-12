import { useContext, useState } from 'react';
import { TodoContext } from '../../context';
import { XCircleIcon } from '@heroicons/react/24/solid';
import './TodoModal.css';

export const TodoModal = () => {
	const { setShowModal, addTodo } = useContext(TodoContext);
	const [newTodoValue, setNewTodoValue] = useState('');

	const onCancel = () => {
		setShowModal(false);
	};

	const onAddButton = () => {
		setShowModal(false);
		addTodo(newTodoValue);
	};

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};

	return (
		<>
			<div className='fixed h-screen inset-0 bg-background bg-opacity-60 flex items-center flex-col justify-center align-middle backdrop-blur-sm'>
				<div className='bg-background p-2 rounded-lg flex flex-col justify-center w-80 sm:w-96 md:w-3/4 lg:w-2/4'>
					<section className='flex justify-between mb-4 p-4'>
						<p>Add new task</p>
						<div>
							<XCircleIcon
								onClick={() => setShowModal(false)}
								className='h-8 w-8 cursor-pointer text-gray hover:text-secondary'
							/>
						</div>
					</section>
					<section className='flex flex-col p-2 mb-8'>
						<input
							className='bg-input rounded-lg px-4 py-2'
							type='text'
							placeholder='New task...'
							onChange={onChange}
						/>
					</section>
					<section className='flex flex-row justify-around'>
						<button
							className='bg-secondary m-4 py-2 px-2 rounded-lg w-28'
							onClick={onCancel}
						>
							Cancel
						</button>
						<button
							disabled={!newTodoValue ? true : false}
							className='bg-primary m-4 py-2 px-4 rounded-lg w-28 disabled:opacity-50'
							onClick={onAddButton}
						>
							Add
						</button>
					</section>
				</div>
			</div>
		</>
	);
};
