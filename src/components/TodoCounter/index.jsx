export const TodoCounter = ({ total, completed }) => {
	return (
		<header className='p-2 mb-4'>
			<div className='flex flex-col items-center'>
				<h1 className='my-4 text-2xl'>TODO APP</h1>
				<p className='text-xl'>
					Haz completado {completed} de {total} tareas
				</p>
			</div>
		</header>
	);
};
