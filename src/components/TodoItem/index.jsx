import './TodoItem.css';
import { CheckBadgeIcon, XCircleIcon } from '@heroicons/react/24/solid';

export const TodoItem = ({ description, completed }) => {
	return (
		<li className='todo__item flex flex-row justify-between mb-6 py-2 px-4 rounded-lg'>
			<div>
				<CheckBadgeIcon
					className={`h-8 w-8 ${completed ? 'text-primary' : 'text-gray'}`}
				/>
			</div>
			<div>
				<p className={completed ? 'line-through decoration-2' : undefined}>
					{description}
				</p>
			</div>
			<div>
				<XCircleIcon className='h-8 w-8 text-gray hover:text-secondary' />
			</div>
		</li>
	);
};
