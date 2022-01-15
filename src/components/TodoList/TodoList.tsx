import * as React from "react";
import cn from "classnames";
import styles from "./TodoList.module.css";
import { ITodoListProps } from "./types";
const TodoList: React.FC<ITodoListProps> = ({ items, onDelete, doneItem }) => {
	if (!items || !items.length) return null;
	const deleteHandler = (id: string) => onDelete && onDelete(id);
	const doneHandler = (id: string) => doneItem && doneItem(id);
	return (
		<ul className={styles.list}>
			{items.map(({ id, title, done }) => (
				<li className={styles.item} key={id}>
					<h3
						className={cn(styles.itemTitle, { [styles.done]: done })}
						tabIndex={0}
						onClick={() => doneHandler(id)}
					>
						{title}
					</h3>
					<button
						className={styles.deleteButton}
						onClick={() => deleteHandler(id)}
						aria-label="delete task"
					/>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
