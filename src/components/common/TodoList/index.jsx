import styles from './TodoList.module.scss';
import TodoItem from "../TodoItem/index.jsx";

import empty_list from "../../../img/Clipboard.png"

const TodoList = ({todoList, handleChange, handleDelete, handleDeleteCompleted}) => {
	const todo_count = todoList.length;
	let todo_completed = todoList.filter(todo => todo.isCompleted).length;


	return (
		<div className={styles.todoList}>
			<div className={styles.todoList__top}>
				<div className={styles.todoList__info}>
					Всего задач
					<div className={styles.todoList__info_label}>{todo_count}</div>
				</div>
				<div className={styles.todoList__info + " " + styles.todoList__info_secondary}>
					Выполнено
					<div className={styles.todoList__info_label}>{todo_completed} из {todo_count}</div>
				</div>
			</div>

			<div className={styles.todoList__list}>
				{todoList.map(todo => (
					<TodoItem
						key={todo.id}
						text={todo.text} isCompleted={todo.isCompleted}
						id={todo.id}
						onChange={handleChange}
						onDelete={handleDelete}
					/>
				))}
				{!todoList.length ? <div className={styles.todoList__empty}>
					<img src={empty_list} alt=""/>
					<div style={{fontWeight: 700}}>Список задач пуст</div>
					<div>Вы можете создать задачу в форме выше</div>
				</div> :
				<button
					className={styles.todoList__btn}
					onClick={handleDeleteCompleted}
				>Удалить выполненные</button>
				}

			</div>
		</div>
	);
};

export default TodoList;

