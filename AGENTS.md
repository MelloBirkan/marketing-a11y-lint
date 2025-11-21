# Repository Guidelines

Short guide for contributing to the A11Y Lint marketing site (Next.js 15 + Tailwind CSS 4). Keep changes small, accessible, and easy to review.

## Project Structure & Module Organization
- `src/app`: App Router routes (`page.tsx`, `company`, `pricing`, `login`) plus shared layout in `layout.tsx`.
- `src/components`: Reusable UI primitives (cards, navbar, forms, animations). Prefer composing existing pieces before adding new ones.
- `src/styles/tailwind.css`: Theme tokens, motion, and global affordances. Update here for palette or typography changes.
- `public/`: Static assets (screenshots, icons). Optimize before adding.
- Root configs: `eslint.config.mjs`, `prettier.config.js`, `next.config.mjs`, `tsconfig.json`. Path alias `@/*` resolves to `src/*`.

## Build, Test, and Development Commands
- `npm install`: Install dependencies.
- `npm run dev`: Start the dev server on `http://localhost:3000` with HMR.
- `npm run lint`: ESLint with `next/core-web-vitals` and TypeScript rules.
- `npm run build`: Production build; run before releasing.
- `npm run start`: Serve the built app locally for release verification.

## Coding Style & Naming Conventions
- TypeScript + React function components; keep props typed and prefer composition over inheritance.
- Formatting: 2-space indent, single quotes, no semicolons. Rely on Prettier (`prettier.config.js`) with Tailwind and organize-imports plugins; align Tailwind classes with the plugin rather than hand-reordering.
- File names: use kebab-case for files (`stat-card.tsx`), PascalCase for component exports, and route folders for pages (`src/app/feature/page.tsx`).
- UI/styling: reuse tokens from `src/styles/tailwind.css`; animation keyframes live there. Favor `clsx` for conditional classes and keep inline styles minimal.

## Testing Guidelines
- No automated tests yet; run `npm run lint` and exercise key flows manually (home, pricing, company, login).
- Manual QA: check responsive layouts, keyboard/focus states, and color contrast; run a quick Lighthouse accessibility check before submitting visual changes.
- If adding tests, keep e2e/spec files under `src` or a dedicated `tests` folder and mirror route names for clarity.

## Commit & Pull Request Guidelines
- Commits: concise, present-tense summaries similar to existing history (e.g., “Update branding copy for hero CTA”). Keep scope focused.
- PRs: include a short description, linked issue (if any), and before/after screenshots or screen recordings for UI changes (desktop + mobile). Note manual checks performed and any accessibility considerations.

## Security & Configuration Tips
- Node.js 18+ recommended for Next.js 15. Avoid committing credentials; this site should run without secrets. Optimize new images and prefer SVG where possible to keep the marketing build lean.
