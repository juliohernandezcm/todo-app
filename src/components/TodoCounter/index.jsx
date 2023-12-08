export const TodoCounter = ({ total, completed }) => {
	return (
		<header className='mb-4'>
			<div className='flex flex-col items-center'>
				<h1 className='my-4'>TODO APP</h1>
				<p>
					Haz completado {completed} de {total} tareas
				</p>
			</div>
		</header>
	);
};
