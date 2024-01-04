import { useContext } from 'react';
import { TodoContext } from '../../context';
import './TodoSearch.css';

export const TodoSearch = () => {
	const { searchValue, setSearchValue } = useContext(TodoContext);
	const handleChange = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<div className='flex justify-center my-8 h-12'>
			<input
				className='rounded-lg px-4 py-2 w-5/6   contrast-more:border-primary'
				type='text'
				placeholder='Cortar cebolla...'
				value={searchValue}
				onChange={handleChange}
			/>
		</div>
	);
};
