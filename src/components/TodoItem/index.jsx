import './TodoItem.css';
import { CheckBadgeIcon, XCircleIcon } from '@heroicons/react/24/solid';

export const TodoItem = () => {
	return (
		<li className='todo__item flex flex-row justify-between mb-6 py-2 px-4 rounded-lg'>
			<div>
				<CheckBadgeIcon className='h-6 w-6 text-primary' />
			</div>
			<div>
				<p>Cortar Cebolla</p>
			</div>
			<div>
				<XCircleIcon className='h-6 w-6 text-secondary' />
			</div>
		</li>
	);
};
