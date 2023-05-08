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
exports.give = exports.venueServe = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function venueServe() {
    return __awaiter(this, void 0, void 0, function* () {
        const venues = yield prisma.venue.findMany();
        console.log(venues.filter((_venue, i) => i < 10));
        return venues;
    });
}
exports.venueServe = venueServe;
function give() {
    return venueServe()
        .then(() => __awaiter(this, void 0, void 0, function* () {
        yield prisma.$disconnect();
    }))
        .catch((e) => __awaiter(this, void 0, void 0, function* () {
        console.error(e);
        yield prisma.$disconnect();
        process.exit(1);
    }));
}
exports.give = give;
