import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTaskForm from "../AddTaskForm";

describe("Test AddTaskForm", () => {
	it("Render AddTaskForm correctly", async () => {
		render(<AddTaskForm />);
		expect(screen.getByRole("textbox")).toBeInTheDocument();
	});

	it("Handler work correctly ", async () => {
		const submitHandler = jest.fn();

		render(<AddTaskForm addItem={submitHandler} />);

		userEvent.type(screen.getByRole("textbox"), "test");
		userEvent.click(screen.getByRole("button"));
		expect(submitHandler).toBeCalled();
	});

	it("Handler block without input value ", async () => {
		const submitHandler = jest.fn();

		render(<AddTaskForm addItem={submitHandler} />);

		userEvent.click(screen.getByRole("button"));
		expect(submitHandler).not.toBeCalled();
	});
});
