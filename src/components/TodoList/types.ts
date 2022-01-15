interface ITodoItem {
	id: string;
	title: string;
	done: boolean;
}
export interface ITodoListProps {
	items?: Array<ITodoItem>;
	onDelete?: (id: string) => void;
	doneItem?: (id: string) => void;
}
