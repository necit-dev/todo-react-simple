import styles from './Main.module.scss';
import InputTodo from "../../common/InputTodo";
import TodoList from "../../common/TodoList/index.jsx";
import {useEffect, useState} from "react";

const initialTodoList = [
	{
		text: "Тестовый текст",
		isCompleted: false,
		id: 1,
	},
	{
		text: "Тестовый текст 2",
		isCompleted: false,
		id: 2,
	},
	{
		text: "Тестовый текст 3",
		isCompleted: false,
		id: 3,
	}
]

const Main = () => {

	const [todoList, setTodoList] = useState( () => {
		const saved = localStorage.getItem('todos');
		return saved ? JSON.parse(saved) : [];
	})

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todoList))
	}, [todoList]);

	const handleChange = (id) => {
		const newList = todoList.map(todo => (
			todo.id === id ? {...todo, isCompleted: !todo.isCompleted}: todo
		))
		// console.log(newList)
		setTodoList(newList)
	}

	const handleAdd = (newTodo) => {
		setTodoList([...todoList, newTodo])
	}

	const handleDelete = (id) => {
		const newList = todoList.filter(todo => todo.id !== id)
		setTodoList(newList)
	}

	const handleDeleteCompleted = () => {
		const newList = todoList.filter(todo => (
			!todo.isCompleted
		))
		setTodoList(newList)
	}

	return (
		<div className={styles.main}>
			<div className="container">
				<InputTodo handleAdd={handleAdd} />
				<TodoList
					todoList={todoList}
					handleChange={handleChange}
					handleDelete={handleDelete}
					handleDeleteCompleted={handleDeleteCompleted}
				/>
			</div>
		</div>
	)
}

export default Main;