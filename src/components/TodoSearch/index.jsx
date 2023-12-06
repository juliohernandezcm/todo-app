import './TodoSearch.css';

export const TodoSearch = () => {
	return (
		<div className='flex justify-center my-8'>
			<input
				className='rounded-lg px-4 py-2 w-5/6'
				type='text'
				placeholder='Cortar cebolla...'
			/>
		</div>
	);
};
