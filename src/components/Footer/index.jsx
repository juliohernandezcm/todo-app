import 'boxicons';

export const Footer = () => {
	return (
		<footer className='grid grid-cols-1 grid-rows-2 w-full h-full'>
			<section className='flex flex-row justify-center gap-4'>
				<img src='src/assets/github-logo-36.png' alt='' />
				<img src='src/assets/linkedin-logo-36.png' alt='' />
				<img src='src/assets/facebook-logo-36.png' alt='' />
			</section>
			<section className='flex flex-col justify-start text-center'>
				<p className='text-xs'>Julio Hernández ©2023</p>
			</section>
		</footer>
	);
};
