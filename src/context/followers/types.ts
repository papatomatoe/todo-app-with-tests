import { IFollower } from "types";

export interface IState {
	followers: Array<IFollower>;
	loading: boolean;
	error: any;
}
