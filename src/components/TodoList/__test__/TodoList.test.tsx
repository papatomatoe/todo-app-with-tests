import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TodoList from "../TodoList";

const todos = [
	{ id: "1", title: "Test 1", done: false },
	{ id: "2", title: "Test 2", done: true },
];

describe("Test TodoList component", () => {
	it("TodoList does not render without items prop", () => {
		render(<TodoList />);
		expect(screen.queryByRole("list")).toBeNull();
	});

	it("TodoList render correctly with items prop", () => {
		render(<TodoList items={todos} />);
		expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);
	});

	it("Handlers doneItem works correctly", () => {
		const doneItem = jest.fn();

		render(<TodoList items={todos} doneItem={doneItem} />);
		const [firstHeading, secondHeading] = screen.getAllByRole("heading", {
			level: 3,
		});
		userEvent.click(firstHeading);
		userEvent.click(secondHeading);
		expect(doneItem).toBeCalledTimes(2);
	});

	it("Handlers onDelete works correctly", () => {
		const onDelete = jest.fn();

		render(<TodoList items={todos} onDelete={onDelete} />);
		const [firstButton, secondButton] = screen.getAllByRole("button");
		userEvent.click(firstButton);
		userEvent.click(secondButton);
		expect(onDelete).toBeCalledTimes(2);
	});
});
