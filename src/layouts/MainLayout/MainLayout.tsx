import * as React from "react";
import styles from "./MainLayout.module.css";
import { IMainLayoutProps } from "./types";
const MainLayout: React.FC<IMainLayoutProps> = ({
	children,
	pageTitle,
	isTitleVisible = true,
}) => {
	return (
		<>
			<main className={styles.main}>
				<div className={styles.container}>
					{pageTitle && (
						<h1 className={isTitleVisible ? styles.title : "visually-hidden"}>
							{pageTitle}
						</h1>
					)}
					{children}
				</div>
			</main>
		</>
	);
};

export default MainLayout;
