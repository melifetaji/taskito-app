import connectMongo from "../../../db/connect";
import Users from "../../../model/Schema";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
	await connectMongo().catch((error) =>
		res.json({ error: "Connection failed" })
	);

	// only post method is accepted
	if (req.method === "POST") {
		if (!req.body) return res.status(404).json({ error: "Data not found" });
		const { username, email, password } = req.body;

		// check duplicate users
		const checkexisting = await Users.findOne({ email });
		if (checkexisting)
			return res.status(422).json({ message: "User already exists" });

		// hash password
		Users.create({ username, email, password: await hash(password, 12) })
			.then(() => {
				res.status(201).json({ message: "User created successfully" });
			})
			.catch((e) => {
				res.status(500).json({ error: e });
			});
	} else {
		res
			.status(500)
			.json({ message: "HTTP method not valid only POST Accepted" })
			.end();
	}
}
