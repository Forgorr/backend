import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(cors());

app.post("/api/login", async (context) => {
  const body = await context.req.json();
  return context.json({ message: "Login", data: body });
});

app.post("/api/signup", async (context) => {
  const body = await context.req.json();
  return context.json({ message: "Signup", data: body });
});

export default {
  port: 5269,
  fetch: app.fetch,
};
