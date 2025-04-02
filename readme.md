# Impex Lite App

A modern React project built using TypeScript, Formik, Redux Toolkit Query, and advanced TypeScript configurations for capturring container images.

## Table of Contents

- [Folder Structure]()
- [Getting Started]()
- [Available Scripts]()
- [Project Configuration]()
- [Code Guidelines]()

## Folder Structure

```
root-directory/
├── .husky/              		# Husky hooks for Git automation
├── cypress/             		# Cypress end-to-end tests
├── node_modules/        		# Installed dependencies
├── public/              		# Static assets
├── src/                 		# Application source code
│   ├── assets/          		# Static assets (Images, etc.)
│   ├── components/      		# Reusable UI components
│   │   ├── common/      		# Common reusable components
│   │   └── layout/      		# Layout components
│   ├── config/      	 		# Application configuration
│   │   └── internationalization/       # i18n configuration
│   │       ├── locales/      		# Translation files
│   │       └── i18n.ts      		# i18n setup
│   ├── hooks/           		# Custom React hooks
│   ├── pages/           		# Route-based components
│   ├── services/        		# API service calls and functional parts
│   ├── store/           		# Redux store configuration
│   │   ├── slices/       		# Redux slices
│   │   └── store.tsx      		# Store configuration
│   ├── styles/          		# Global and component-specific styles
│   ├── utils/           		# Utility functions
│   ├── types/          		# Global TypeScript types and interfaces
│   ├── App.tsx          		# Main app component
│   ├── index.tsx        		# Application entry point
│   └── routes.tsx        		# Route configuration
├── .babelrc                  		# Babel configuration
├── .env                      		# Environment variables
├── .gitignore                		# Git ignore file
├── .prettierrc               		# Prettier configuration
├── compilation.config.js     		# Custom compilation configuration
├── cypress.config.ts         		# Cypress configuration
├── eslint.config.mjs         		# ESLint configuration
├── jest.config.ts            		# Jest configuration
├── package-lock.json         		# Package lock file
├── package.json              		# Package manifest
├── postcss.config.mjs        		# PostCSS configuration
├── readme.md                 		# Project documentation
├── tsconfig.json             		# TypeScript configuration
└── webpack.config.mjs         		# Webpack configuration
```

## Getting Started

### Prerequisites

Ensure that you have the following installed:

- Node.js (>=14.x)
- npm

### Installation

1. Clone the repository:

   ```
   git clone https://<git-username>@bitbucket.org/impexdocs/impex-lite-app.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

## Available Scripts

### Start the Development Server

```
npm start
```

Runs the app in the development mode. Open [http://localhost:3000]() to view it in the browser.

### Build for Production

```
npm run build
```

Builds the app for production to the `dist` folder.

### Run Tests

```
npm test
```

Launches the test runner.

### Lint and Format

```
npm run lint
npm run format
```

Ensures code quality and formatting.

## Project Configuration

### TypeScript Paths

The project uses path aliases for cleaner imports:

- `@components/*`: Points to `src/components/*`
- `@utils/*`: Points to `src/utils/*`

Defined in `tsconfig.json`:

```
{
  "baseUrl": "./",
  "paths": {
    "@components/*": ["src/components/*"],
    "@utils/*": ["src/utils/*"]
  }
}
```

### ESLint and Prettier

The project is configured with ESLint and Prettier to maintain code quality and formatting.

## Code Guidelines

- **TypeScript Best Practices:** Always use strong types for props and state.
- **Component Structure:** Keep components small and focused.
- **Styling:** Use CSS modules for consistent styling.
- **State Management:** Use Redux Toolkit for global state management.

---

This project structure and guidelines aim to keep the codebase maintainable, scalable, and performant.
