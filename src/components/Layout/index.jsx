export const Layout = ({ children }) => {
	return (
		<div className='grid grid-cols-1 grid-rows-[120px_minmax(400px,_1fr)_100px] h-screen font-roboto'>
			{children}
		</div>
	);
};
