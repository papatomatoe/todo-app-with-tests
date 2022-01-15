import React from "react";
import { Link } from "react-router-dom";
import styles from "./Info.module.css";
import { IInfoProps } from "./types";
const Info: React.FC<IInfoProps> = ({ doneItemCount = 0, children }) => {
	return (
		<div className={styles.info} data-testid="info">
			{doneItemCount > 0 && (
				<p className={styles.totalDone}>
					{doneItemCount} task{doneItemCount > 1 && "s"} left
				</p>
			)}
			{children}
		</div>
	);
};

export default Info;
