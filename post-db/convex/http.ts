import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";

const http = httpRouter();

http.route({
  path: "/post",
  method: "POST",
  handler: httpAction(async (ctx, req) => {
    try {
      const body = await req.json();
      const content = typeof body?.content === "string" ? body.content.trim() : "";

      if (!content) {
        return new Response("Content is required.", { status: 400 });
      }

      const id = await ctx.runMutation(internal.posts.createPost, { content });

      return new Response(JSON.stringify({ id }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error(error);
      return new Response("Failed to post.", { status: 500 });
    }
  }),
});

export default http;
