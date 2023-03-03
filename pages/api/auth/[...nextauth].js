import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../db/connect";
import Users from "../../../model/Schema";
import { compare } from "bcryptjs";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
		CredentialsProvider({
			name: "Credentials",
			async authorize(credentials) {
				await connectMongo().catch((error) => {
					error: "Connection Failed...!";
				});
				const result = await Users.findOne({ email: credentials.email });
				if (!result) {
					throw new Error("No User Found");
				}

				const checkPassword = await compare(
					credentials.password,
					result.password
				);

				// incorrect password
				if (!checkPassword || result.email !== credentials.email) {
					throw new Error("Username or Password doesn't match");
				}

				return result;
			},
		}),
	],
	session: {
		strategy: "jwt",
	},
});
