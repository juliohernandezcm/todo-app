export const TodoList = (props) => {
	return (
		<div>
			<ul className='flex flex-col'>{props.children}</ul>
		</div>
	);
};
