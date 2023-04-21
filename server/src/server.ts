import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { db } from "./user/db";
const appRouter = router({
	// ...
	userById: publicProcedure.input(z.string()).query(async (opts) => {
		const { input } = opts;
		// Retrieve the user with the given ID
		const user = await db.user.findById(input);
		return user;
	}),
});
