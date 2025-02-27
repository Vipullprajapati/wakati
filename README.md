# wakati-api

This repository contains the source code for the `wakati-api`, a Cloudflare Workers API.

## Overview

`wakati-api` provides endpoints for text analysis and processing, utilizing various libraries for tasks like:

* **Rate Limiting:** Using `@hono-rate-limiter/cloudflare` to protect against abuse.
* **API Documentation:** Leveraging `@hono/zod-openapi` and `@scalar/hono-api-reference` for OpenAPI documentation.
* **HTML Parsing:** Using `cheerio` to parse HTML content.
* **Web Framework:** Built with `hono` for a fast and lightweight API.
* **Logging:** Employing `hono-pino` and `pino` for structured logging.
* **Readability Analysis:** Using `readability-scores` for text readability assessment.
* **Text Tokenization:** Utilizes `stoker` for text tokenization.

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (Recommended version specified by your package manager)
* [bun](https://bun.sh/) (for faster package management and script execution)
* [wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-setup/) (Cloudflare Workers CLI)

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd wakati-api
    ```

2.  Install dependencies using bun:

    ```bash
    bun install
    ```

### Development

* **Start the development server:**

    ```bash
    bun run dev
    ```

    This will start the Cloudflare Workers development server using `wrangler dev`.

* **Linting:**

    ```bash
    bun run lint
    ```

    To automatically fix linting errors:

    ```bash
    bun run lint:fix
    ```

* **Testing:**

    ```bash
    bun run test
    ```

* **Coverage:**

    ```bash
    bun run coverage
    ```

### Deployment

* **Deploy to Cloudflare Workers:**

    ```bash
    bun run deploy
    ```

    This will deploy your API to Cloudflare Workers using `wrangler deploy` with minification.

## Dependencies

* **Core Dependencies:**
    * `@hono-rate-limiter/cloudflare`: Rate limiting for Cloudflare Workers.
    * `@hono/zod-openapi`: OpenAPI integration for Hono.
    * `@scalar/hono-api-reference`: API documentation using Scalar.
    * `cheerio`: Fast, flexible, and lean implementation of core jQuery designed specifically for server.
    * `hono`: Ultrafast web framework for Cloudflare Workers, Deno, Bun, Node.js, and others.
    * `hono-pino`: Pino logging middleware for Hono.
    * `pino`: Extremely fast node.js JSON logger.
    * `readability-scores`: Calculates various readability scores for text.
    * `stoker`: Text tokenization library.
* **Development Dependencies:**
    * `@antfu/eslint-config`: Antfu's ESLint configuration.
    * `@cloudflare/workers-types`: TypeScript types for Cloudflare Workers.
    * `@vitest/coverage-v8`: Coverage provider for Vitest.
    * `eslint`: JavaScript linting tool.
    * `vitest`: Next generation test framework.
    * `wrangler`: Cloudflare Workers CLI.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

[MIT](LICENSE) (Replace with your actual license)

