import './TodoAddButton.css';

export const TodoAddButton = () => {
	return (
		<div className='text-center self-end'>
			<button className='add__button rounded-lg px-4 py-2 w-5/6 my-4'>
				Agregar Tarea
			</button>
		</div>
	);
};
