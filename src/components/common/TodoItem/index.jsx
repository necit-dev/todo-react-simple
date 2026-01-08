import styles from './TodoItem.module.scss';
import Checkbox from "../Checkbox/index.jsx";
import Trash from "../../../img/trash.svg?react";
import Edit from "../../../img/edit.svg?react";
import {useState} from "react";

const TodoItem = ({isCompleted, text, id, onChange, onDelete}) => {
	const [isChecked, setChecked] = useState(isCompleted);

	const handleChange = () => {
		setChecked(!isChecked);
		onChange(id);
	}

	// console.log(`Re render, id: ${id}`)

	return (
		<div className={styles.todoItem}>
			<Checkbox onChange={handleChange} isCompleted={isChecked} />
			<div
				className={styles.todoItem__text + " "
					+ (isChecked? styles.todoItem__text_crossed: "")}
			>{text}</div>
			{/*{!isCompleted && <Edit*/}
			{/*	className={styles.todoItem__edit}*/}
			{/*/>}*/}
			<Trash
				className={styles.todoItem__trash}
				onClick={() => onDelete(id)}
			/>
		</div>
	);
};

export default TodoItem;