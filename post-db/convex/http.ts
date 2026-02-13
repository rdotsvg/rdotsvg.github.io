import { httpRouter } from "convex/server"
import { httpAction } from "./_generated/server";
import { body } from "motion/react-client";

const http = httpRouter();

http.route ({
    path: "/post",
    method: "POST",
    handler: httpAction(async (ctx, req) => {
        const body = await req.json();
        console.log(body)
        return new Response("posted", { status: 200 })
    })
})

export default http