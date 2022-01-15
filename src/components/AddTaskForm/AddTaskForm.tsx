import React, { FormEvent, useState } from "react";

import styles from "./AddTaskForm.module.css";

import { IAddTaskForm } from "./types";

const AddTaskForm: React.FC<IAddTaskForm> = ({ addItem }) => {
	const [title, setTaskTitle] = useState<string>("");

	const changeTaskTitleHandler: React.ChangeEventHandler<HTMLInputElement> = (
		e
	) => setTaskTitle(e.target.value);

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!title) return;
		addItem && addItem(title);
		setTaskTitle("");
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<input
				className={styles.input}
				type="text"
				value={title}
				onChange={changeTaskTitleHandler}
				placeholder="Add task title..."
			/>
			<button className={styles.button} type="submit">
				Add
			</button>
		</form>
	);
};

export default AddTaskForm;
