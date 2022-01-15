import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import styles from "./NotFound.module.css";
const NotFound = () => {
	const navigate = useNavigate();
	const backHandler = () => navigate(-1);
	return (
		<MainLayout>
			<h1 className={styles.title}>404 | Page not found</h1>
			<button className={styles.back} type="button" onClick={backHandler}>
				go back
			</button>
		</MainLayout>
	);
};

export default NotFound;
