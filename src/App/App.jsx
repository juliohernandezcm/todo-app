import { AppUI } from './AppUI.jsx';
import './App.css';
import { TodoProvider } from '../context/index.jsx';

// const todoList = [
// 	{
// 		id: crypto.randomUUID(),
// 		description: 'Estudiar React',
// 		isCompleted: false,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		description: 'Hacer la Cama',
// 		isCompleted: false,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		description: 'Leer sobre integration test',
// 		isCompleted: true,
// 	},
// 	{
// 		id: crypto.randomUUID(),
// 		description: '¿Qué día es mañana',
// 		isCompleted: false,
// 	},
// ];

// localStorage.setItem('todos_v1', JSON.stringify(todoList));

// localStorage.removeItem('todos_v1');

function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export { App };
