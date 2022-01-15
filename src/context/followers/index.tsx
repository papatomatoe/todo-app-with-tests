import React from "react";
import { IState } from "./types";
import { useFollowersData } from "./helpers";

const initialState: IState = {
	followers: [],
	loading: false,
	error: null,
};

const FollowersContext = React.createContext(initialState);

export const FollowersContextWrapper: React.FC = ({ children }) => {
	const { followers, loading, error } = useFollowersData(5);

	return (
		<FollowersContext.Provider value={{ followers, loading, error }}>
			{children}
		</FollowersContext.Provider>
	);
};
export const useFollowers = () => React.useContext(FollowersContext);
