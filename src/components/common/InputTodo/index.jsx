import styles from './InputTodo.module.scss';
import {useState} from "react";

const InputTodo = ({handleAdd}) => {
	const [text, setText] = useState('')

	return (
		<div className={styles.inputTodo}>
			<input
				type="text"
				className={styles.inputTodo__input}
				placeholder="Добавить новую задачу"
				onChange={(e) => setText(e.target.value)}
				value={text}
			/>
			<button
				className={styles.inputTodo__btn}
				onClick={() => {
					if (text.trim()) handleAdd({
							text,
							isCompleted: false,
							id: Date.now()
					})
				}}
			>
				<span>Создать</span>
				<span className={styles.inputTodo__btn_plus}>+</span>
			</button>
		</div>
	);
};

export default InputTodo;