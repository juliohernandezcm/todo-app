export const TodoEmpty = () => {
	return (
		<section className='place-self-center py-2 px-4'>
			<p className='text-center mb-3'>
				No tienes tareas pendientes. Crea tu primera tarea haciendo clic en
				el botón de abajo.
			</p>
			<span className='flex justify-center'>
				<img src='src/assets/curved-arrow.png' alt='Flecha abajo' />
			</span>
		</section>
	);
};
