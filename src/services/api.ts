import { IFollowersResponse } from "types";

const getResource = async <T>(url: string): Promise<T> => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
};

export const getFollowers = async (nums: number) => {
	try {
		const url = `https://randomuser.me/api/?results=${nums}`;
		const followers = await getResource<IFollowersResponse>(url);
		return followers;
	} catch (error) {
		throw new Error(error);
	}
};
