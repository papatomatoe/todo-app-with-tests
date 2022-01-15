import { render, screen } from "@testing-library/react";
import Section from "../Section";

describe("render Section component correct", () => {
	it("render Section component with title", () => {
		render(<Section title="React" />);

		expect(screen.getByText(/react/i)).toBeInTheDocument();
	});

	it("render Sections component without title", () => {
		const { container } = render(<Section />);
		expect(container.querySelector("section")).toBeInTheDocument();
		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
	});

	it("render Section with children", () => {
		render(
			<Section>
				<p>Section child</p>
			</Section>
		);
		expect(screen.getByText(/section/i));
	});
});
