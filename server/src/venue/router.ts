import { z } from "zod";

import { router, publicProcedure } from "../trpc";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const venueRouter = router({
	getVenues: publicProcedure.query(async () => {
		const venues = await prisma.venue.findMany();
		return venues;
	}),
	//   getVenueById: publicProcedure
	//     .input((val: unknown) => {
	//       if (typeof val === 'string') return val;
	//       throw new Error(`Invalid input: ${typeof val}`);
	//     })
	//     .query((req) => {
	//       const { input } = req;

	//       const venue = venues.find((venue) => venue.id === input);

	//       return venue;
	//     }),
	//   createUser: publicProcedure
	//     .input(z.object({ name: z.string() }))
	//     .mutation((req) => {
	//       const { input } = req;

	//       const user: User = {
	//         id: `${Math.random()}`,
	//         name: input.name,
	//       };

	//       users.push(user);

	//       return user;
	//     }),
});
