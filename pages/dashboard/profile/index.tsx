import React from "react";
import { getSession } from "next-auth/react";
type Props = {};

const Profile = (props: Props) => {
	return <div>Profile</div>;
};


export async function getServerSideProps(context: any) {
	const session = await getSession(context);
	const { resolvedUrl } = context;

	if (!session) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}

	return {
		props: { session },
	};
}


export default Profile;
