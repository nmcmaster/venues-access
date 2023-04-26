import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const venues = await prisma.venue.findMany();
	console.log(venues.filter((_venue, i) => i < 10));
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
