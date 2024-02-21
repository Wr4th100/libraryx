import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const bookRouter = createTRPCRouter({
  getAllBooksPaginated: publicProcedure
    .input(z.object({ page: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.db.book.findMany({
        skip: input.page * 10,
        take: 10,
      });
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        author: z.string(),
        subject: z.string(),
        published: z.date(),
      }),
    )
    .mutation(({ input, ctx }) => {
      return ctx.db.book.create({
        data: input,
      });
    }),
});
