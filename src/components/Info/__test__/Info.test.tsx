import { render, screen } from "@testing-library/react";

import Info from "../Info";

describe("Render Info component", () => {
	it("Info component render correctly without children", () => {
		render(<Info />);
		expect(screen.getByTestId("info")).toBeInTheDocument();
	});

	it("Info component render correctly with children", () => {
		render(
			<Info>
				<p>Inner text</p>
			</Info>
		);
		expect(screen.getByText(/inner text/i)).toBeInTheDocument();
	});
	it("Info component render correctly with doneItemCount > 0", () => {
		render(<Info doneItemCount={3} />);
		expect(screen.getByText(/3 tasks left/i)).toBeInTheDocument();
	});
});
