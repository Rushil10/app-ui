import { rest } from "msw";

export const handlers = [
  rest.get("/api/state/cache", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
        password: "password",
      })
    );
  }),
];
