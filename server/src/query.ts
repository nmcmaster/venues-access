import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function venueServe() {
	const venues = await prisma.venue.findMany();
	console.log(venues.filter((_venue, i) => i < 10));
	return venues;
}

export function give() {
	return venueServe()
		.then(async () => {
			await prisma.$disconnect();
		})
		.catch(async (e) => {
			console.error(e);
			await prisma.$disconnect();
			process.exit(1);
		});
}
