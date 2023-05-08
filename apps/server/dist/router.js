"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const trpc_1 = require("./trpc");
const router_1 = require("./venue/router");
exports.appRouter = (0, trpc_1.router)({
    venue: router_1.venueRouter,
});
