import { render, screen } from "@testing-library/react";
import MainLayout from "../MainLayout";

describe("test MainLayout component", () => {
	it("should MainLayout render correct without props", () => {
		render(<MainLayout />);
		expect(screen.getByRole("main")).toBeInTheDocument();
	});

	it("should MainLayout render correct with children", () => {
		render(
			<MainLayout>
				<p>Inner text</p>
			</MainLayout>
		);
		expect(screen.getByText(/inner text/i)).toBeInTheDocument();
	});

	it("should MainLayout render correct with title", () => {
		render(<MainLayout pageTitle="Main Page"></MainLayout>);
		expect(screen.getByText(/main page/i)).toBeInTheDocument();
	});

	it("should MainLayout render correct with title", () => {
		render(
			<MainLayout pageTitle="Main Page" isTitleVisible={false}></MainLayout>
		);
		expect(screen.getByText(/main page/i)).toBeInTheDocument();
		expect(screen.getByRole("heading", { level: 1 })).toHaveClass(
			"visually-hidden"
		);
	});
});
