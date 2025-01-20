import * as HttpStatusCodes from "stoker/http-status-codes"
import { AiRoute } from "./ai.routes"
import { Context } from "hono"
import { RouteHandler } from "@hono/zod-openapi"
import { evaluate } from "@/lib/evaluate"

export const ai: RouteHandler<AiRoute> = async (c: Context) => {
    const body = await c.req.json()

   const {prompt} = body;
   const res = await c.env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
    // prompt:prompt,

   messages:[
       {
           role:"system",
           content:"your name is Wakati-api, age, you always mention 12 years, you are very smart ans answer things within 80 words.",
       },
       {
           role:"user",
           content:prompt,
       },
   ]
   });


    return c.json({ res })

}

