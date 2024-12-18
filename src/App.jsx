// src/App.jsx

/*import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
	const [todos, setTodos] = useState([
		{ id: 1, title: 'Купить продукты', completed: false },
		{ id: 2, title: 'Прочитать книгу', completed: false },
		{ id: 3, title: 'Погулять с собакой', completed: false },
	]);
	const [newTodo, setNewTodo] = useState('');
	const [filter, setFilter] = useState('all');

	const toggleTodo = (id) => {
		setTodos(
			todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
		);
	};

	const addTodo = (e) => {
		e.preventDefault();
		if (!newTodo) return;

		const newTodoItem = {
			id: Date.now(),
			title: newTodo,
			completed: false,
			deleted: false,
		};
		setTodos([...todos, newTodoItem]);
		setNewTodo('');
	};

	const deleteTodo = (id) => {
        setTodos(todos.filter((task) => task.id !== id));
    };

    const filteredTodos = todos.filter(todo => {
		if (filter === 'completed') return todo.completed;
		if (filter === 'incomplete') return !todo.completed;
		return true; // 'all'
	});

	return (
		<div className="mana">
			<h1>Мой список дел</h1>
			<form className="string" onSubmit={addTodo}>
				<input
					type="text"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					placeholder="Добавьте новую задачу"
				/>
				<button className="buttonAdd" type="submit">Добавить</button>
			</form>
			<div className="buttons">
				<button className="buttonAll" onClick={() => setFilter('all')}>Все</button>
				<button className="buttonCompleted" onClick={() => setFilter('completed')}>Выполненные</button>
				<button className="buttonIncomplete" onClick={() => setFilter('incomplete')}>Невыполненные</button>
			</div>
			<TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
		</div>
	);
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import DndPage from './pages/DndPage';
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<TodoPage />} />
				<Route path="/dnd" element={<DndPage />} />
			</Routes>
		</Router>
	);
}
export default App;