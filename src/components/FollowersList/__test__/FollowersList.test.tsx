import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
const users = [
	{
		id: "1",
		username: "user1",
		login: "user1",
		avatar: "/img/user1.jpeg",
	},
	{
		id: "2",
		username: "user2",
		login: "user2",
		avatar: "/img/user2.jpeg",
	},
];
describe("Test FollowersList component", () => {
	it("FollowersList not render without props", () => {
		render(<FollowersList />);
		expect(screen.queryByRole("list")).toBeNull();
	});

	it("FollowersList render correctly with props", () => {
		render(<FollowersList followers={users} />);
		expect(screen.getAllByRole("img").length).toBe(2);
	});
});
