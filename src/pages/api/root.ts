import { createTRPCRouter } from "~/server/api/trpc";
import { listingsRouter } from "./routers/listings";

export const appRouter = createTRPCRouter({
  listings: listingsRouter,
});

export type AppROuter = typeof appRouter;
