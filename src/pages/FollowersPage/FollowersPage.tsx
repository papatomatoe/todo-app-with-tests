import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import Section from "components/Section";
import FollowersList from "components/FollowersList";
import { FollowersContextWrapper, useFollowers } from "context/followers";
const FollowersPage = () => {
	const { followers, loading, error } = useFollowers();

	return (
		<MainLayout pageTitle="Followers">
			<Section title="followers">
				{loading ? (
					<p>Loading...</p>
				) : error ? (
					<p>something went wrong...</p>
				) : (
					<FollowersList followers={followers} />
				)}
				<Link to="/">todo</Link>
			</Section>
		</MainLayout>
	);
};

export default () => (
	<FollowersContextWrapper>
		<FollowersPage />
	</FollowersContextWrapper>
);
