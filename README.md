# fake-frontend-project

A basic React + TypeScript frontend application built with Vite.

## Project structure

```
fake-frontend-project/
├─ src/
│  ├─ App.tsx           # Main React component (contains an intentional pattern to review)
│  ├─ main.tsx          # Entry point — mounts the React app
│  └─ components/
│      └─ Button.tsx    # Reusable Button component
├─ astro/
│  └─ index.astro       # Basic Astro page
├─ index.html           # HTML entry point for Vite
├─ vite.config.ts       # Vite configuration
├─ tsconfig.json        # TypeScript configuration
└─ package.json
```

## Getting started

```bash
npm install
npm run dev    # start the dev server
npm run build  # type-check and build for production
```

## Intentional pattern to review

`src/App.tsx` contains a `useEffect` call without a dependency array.  
This causes the effect to run on **every render**, which is usually a bug.
The fix is to pass `[count]` as the second argument to `useEffect`.