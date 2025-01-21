import { createRoute, z } from '@hono/zod-openapi'
import { createRouter } from "@/lib/create-app"
import * as HttpStatusCodes from "stoker/http-status-codes"

const router = createRouter().openapi(createRoute({
    path: "/status",
    description: "to quickly verify the current operational state and availability of the API.",
    method: "get",  
    tags: ["Status"],
    responses: {
        [HttpStatusCodes.OK]: {
            description: "The API is operational and available.",
            content: {
                "application/json": {
                    schema: z.object({
                        message: z.string()
                    }),
                },
            }, 
        },
    },
}), (c) => {
    return c.json({ message: "Wakati-API is active" })
})

export default router