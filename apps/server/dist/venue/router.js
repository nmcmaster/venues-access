"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.venueRouter = void 0;
const trpc_1 = require("../trpc");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.venueRouter = (0, trpc_1.router)({
    getVenues: trpc_1.publicProcedure.query(() => __awaiter(void 0, void 0, void 0, function* () {
        const venues = yield prisma.venue.findMany();
        return venues;
    })),
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
