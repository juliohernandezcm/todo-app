export const TodoList = (props) => {
	return (
		<div>
			<ul className='flex flex-col justify-center justify-items-center'>
				{props.children}
			</ul>
		</div>
	);
};
