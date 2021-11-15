import { useState } from 'react';
import './App.css';
import MemeList from './memeGenerator/MemeList';
import TodoList from './todos/TodoList';

const App = () => {
	const [activeArea, setActiveArea] = useState("");

	const setMemesActive = () => setActiveArea("memes");
	const setTodosActive = () => setActiveArea("todos");

	return (
		<div className="App">
			<h1>Create Something</h1>
			<div className="buttons">
				<button onClick={setMemesActive} type="button">Memes</button>
				<button onClick={setTodosActive} type="button">Todos</button>
			</div>
			<main>
				{activeArea === "memes"
					? <MemeList />
					: activeArea === "todos"
						? <TodoList />
						: <p>Select something above.</p>
				}
			</main>
		</div>
	);
}

export default App;
