import { router } from './trpc';
import { venueRouter } from './venue/router';

export const appRouter = router({
  venue: venueRouter,
});