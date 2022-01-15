import * as React from "react";
import { nanoid } from "nanoid";
import { IState } from "./types";
import { ITodoItem } from "types";
import mockTodoItems from "mock/todos.json";

const initialState: IState = {
	items: [],
	addItem: null,
	deleteItem: null,
	doneItem: null,
};

const TodoContext = React.createContext(initialState);

export const TodosContextWrapper: React.FC = ({ children }) => {
	const [items, setItems] = React.useState<Array<ITodoItem>>([]);

	React.useEffect(() => {
		setItems(mockTodoItems);
	}, []);

	const addItem = (title: string) => {
		const newItem = {
			id: nanoid(),
			done: false,
			title,
		};
		setItems([newItem, ...items]);
	};

	const deleteItem = (id: string) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

	const doneItem = (id: string) => {
		const itemIndex = items.findIndex((item) => item.id === id);

		const item = { ...items[itemIndex] };

		item.done = !item.done;

		const newItems = [...items];

		newItems[itemIndex] = item;

		setItems(newItems);
	};

	return (
		<TodoContext.Provider value={{ items, addItem, deleteItem, doneItem }}>
			{children}
		</TodoContext.Provider>
	);
};

export const useTasks = () => React.useContext(TodoContext);
