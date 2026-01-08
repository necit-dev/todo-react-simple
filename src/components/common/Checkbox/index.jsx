import styles from './Checkbox.module.scss';

const Checkbox = ({isCompleted, onChange}) => {
	return (
		<div className={styles.checkbox}>
			<label>
				<input type="checkbox" className={styles.checkbox__real} checked={isCompleted}
					onChange={onChange}
				/>
				<span className={styles.checkbox__custom}></span>
			</label>
		</div>
	);
};

export default Checkbox;