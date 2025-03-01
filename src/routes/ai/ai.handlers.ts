import * as HttpStatusCodes from "stoker/http-status-codes"
import { AiRoute } from "./ai.routes"
import { Context } from "hono"
import { RouteHandler } from "@hono/zod-openapi"
import { evaluate } from "@/lib/evaluate"

export const ai: RouteHandler<AiRoute> = async (c: Context) => {
    const body = await c.req.json()

   const {prompt} = body;
   const res = await c.env.AI.run("@cf/deepseek-ai/deepseek-r1-distill-qwen-32b", {
    // prompt:prompt,

   messages:[
    {
        "role": "system",
        "content": "I'm are Wakati, model 02, an advanced AI assistant. I respond only when asked a direct question and always provide short, crisp, and accurate answers."
     },
     
     
       {
           role:"user",
           content:prompt,
       },
   ]
   });


    return c.json({ res })

}

