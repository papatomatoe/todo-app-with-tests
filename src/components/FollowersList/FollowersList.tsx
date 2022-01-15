import React from "react";
import styles from "./FollowersList.module.css";
import { IFollowersListProps } from "./types";
const FollowersList: React.FC<IFollowersListProps> = ({ followers }) => {
	if (!followers || !followers.length) return null;
	return (
		<ul className={styles.list}>
			{followers.map(({ id, username, login, avatar }) => (
				<li key={id} className={styles.item}>
					<img
						src={avatar}
						className={styles.avatar}
						alt={username}
						width="50"
						height="50"
					/>
					<div className={styles.user}>
						<h3 className={styles.username}>{username}</h3>
						<p className={styles.login}>{login}</p>
					</div>
				</li>
			))}
		</ul>
	);
};

export default FollowersList;
