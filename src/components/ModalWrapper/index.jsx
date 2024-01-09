import { createPortal } from 'react-dom';

export const ModalWrapper = ({ children }) => {
	const modalWrapper = document.querySelector('#modalWrapper');
	return createPortal(children, modalWrapper);
};
