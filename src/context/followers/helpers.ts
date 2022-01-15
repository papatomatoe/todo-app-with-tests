import React from "react";
import { getFollowers } from "services/api";
import { _IFollower } from "types";

const getFollowersData = (followers: Array<_IFollower>) =>
	followers.map(({ name, login, picture }) => ({
		id: login.uuid,
		username: `${name.first} ${name.last}`,
		login: login.username,
		avatar: picture.medium,
	}));

export const useFollowersData = (nums: number) => {
	const [followers, setFollowers] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		const fetchFollowers = async () => {
			try {
				setLoading(true);
				const data = await getFollowers(nums);
				const f = getFollowersData(data.results);
				setFollowers(f);
			} catch (error) {
				console.error(error);
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchFollowers();
	}, []);

	return { followers, loading, error };
};
