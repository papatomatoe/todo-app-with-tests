import { ITodoItem } from "types";

export interface IState {
	items: Array<ITodoItem>;
	addItem: (title: string) => void;
	deleteItem: (id: string) => void;
	doneItem: (id: string) => void;
}
