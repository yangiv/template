# React TypeScript Project

## Overview
This project is built using:
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Vite**: A fast build tool optimized for modern web development.
- **shadcn/ui**: A collection of beautifully styled and accessible UI components.

## Requirements

Ensure you have the following installed:

```
Node.js v22.11.0+
```

## Getting Started

To start the development server, run one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Once the server is running, open your browser and navigate to:

[http://localhost:5173/](http://localhost:5173/)

## Deployment

### Static Deployment

To build the project for different environments, use the following commands:

```bash
# Staging
yarn install && yarn build:staging

# UAT
yarn install && yarn build:uat

# Production
yarn install && yarn build:production
```

After running the respective build command, a `dist` folder will be generated, containing the HTML, CSS, and JavaScript assets for deployment.

