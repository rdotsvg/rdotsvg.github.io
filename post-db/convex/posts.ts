import { v } from "convex/values";
import { internalMutation } from "./_generated/server";

export const createPost = internalMutation({
  args: {
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("posts", { content: args.content });
    return id;
  },
});
