import * as React from "react";
import { Link } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import AddTaskForm from "components/AddTaskForm";
import Section from "components/Section";
import TodoList from "components/TodoList";
import Info from "components/Info";

import { TodosContextWrapper, useTasks } from "context/todos";

const MainPage = () => {
	const { items, deleteItem, doneItem, addItem } = useTasks();

	const doneItems = React.useMemo(
		() => items.filter((item) => item.done).length,
		[items]
	);

	return (
		<MainLayout pageTitle="Todo">
			<AddTaskForm addItem={addItem} />
			<Section title="Todo">
				<TodoList items={items} onDelete={deleteItem} doneItem={doneItem} />
				<Info doneItemCount={doneItems}>
					<Link to="/followers">followers</Link>
				</Info>
			</Section>
		</MainLayout>
	);
};

export default () => (
	<TodosContextWrapper>
		<MainPage />
	</TodosContextWrapper>
);
