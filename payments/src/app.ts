import express from "express";
import cookieSession from "cookie-session";
import { json } from "body-parser";
import "express-async-errors";

import { errorhandler, NotFoundError, currentUser } from "@san_tickets/common";
import { createChargeRouter } from "./routes/new";
const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV != "test",
  })
);

app.use(currentUser);
app.use(createChargeRouter);

app.all("*", async () => {
  throw new NotFoundError();
});
app.use(errorhandler);

export { app };
