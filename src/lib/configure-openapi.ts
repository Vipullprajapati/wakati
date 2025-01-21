import { apiReference } from "@scalar/hono-api-reference"
import { OpenAPIHono } from "@hono/zod-openapi"
import packageJSON from "../../package.json" assert { type: "json" }

export default function configureOpenAPI(app: OpenAPIHono) {
    app.doc("/schema", {
        openapi: "3.0.0",
        info: {
            title: `Wakati API`,
            description: `# Text Intelligence Platform
            \nWakati API is an advanced text intelligence platform designed to analyze and calculate text scores with AI modules.\n`,
    
            version: packageJSON.version,
        },
    })
    app.get("/",
        apiReference({
            theme: "elysiajs",
            spec: {
                url: "/schema"
            }
        }))
}