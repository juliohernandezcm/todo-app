import './TodoSearch.css';

export const TodoSearch = ({ searchValue, setSearchValue }) => {
	const handleChange = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<div className='flex justify-center my-8'>
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
