import * as React from "react";
import styles from "./Section.module.css";
import { ISectionProps } from "./types";
const Section: React.FC<ISectionProps> = ({ children, title }) => {
	return (
		<section className={styles.section}>
			{title && <h2 className="visually-hidden">{title}</h2>}
			{children}
		</section>
	);
};

export default Section;
