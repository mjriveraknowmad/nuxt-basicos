# Nuxt 4 Starter Template - Agent Guidelines

## Project Overview
- **Purpose**: Production-ready Nuxt starter template with Nuxt UI
- **Stack**: Nuxt 4 + Vue 3 (Composition API) + TypeScript + Tailwind CSS v4 + Nuxt UI
- **Package Manager**: pnpm 11.6+
- **Node Version**: 18+ recommended

## Quick Start Commands
- `pnpm install` – Install dependencies
- `pnpm dev` – Start dev server (http://localhost:3000)
- `pnpm build` – Build for production
- `pnpm preview` – Preview production build
- `pnpm lint` – Run ESLint
- `pnpm typecheck` – Type check with vue-tsc

## Project Structure
```
app/
  ├── app.vue              # Root component, app shell
  ├── app.config.ts        # App config (metadata, etc)
  ├── pages/
  │   └── index.vue        # Home page (auto-routed)
  ├── components/
  │   ├── AppLogo.vue      # Reusable UI components
  │   └── TemplateMenu.vue
  └── assets/
      └── css/
          └── main.css     # Global Tailwind + Nuxt UI imports

nuxt.config.ts             # Nuxt configuration (modules, routing, build)
eslint.config.mjs          # ESLint rules (extends @nuxt/eslint)
tsconfig.json              # TypeScript config (references .nuxt/*)
package.json               # Dependencies & scripts
```

## Vue 3 Composition API Standards
- **Always** use `<script setup lang="ts">` for all `.vue` files
- **Never** use Options API unless explicitly required
- Follow single responsibility: one clear purpose per component
- Keep components small; split if 3+ distinct UI sections exist
- Extract shared state/logic into composables (`composables/useXxx.ts`)
- Use `ref` for reactive state, `computed` for derived values
- Use `defineProps` and `defineEmits` with explicit types
- Components auto-import from `app/components/`; no manual imports needed

## Component Data Flow
- **Props down, events up** (primary pattern)
- Use `v-model` only for true two-way contracts
- Use provide/inject only for deep-tree dependencies
- Keep contracts explicit and typed

## Nuxt Conventions
- **File-based routing**: Pages in `app/pages/` auto-create routes
- **Auto-imports**: Components, composables, and utils auto-import; no `import` needed
- **useHead()**: Add meta tags, title, favicon, SEO in `<script setup>`
- **useSeoMeta()**: Simplified SEO meta setup
- **Prerender**: Use `routeRules` in `nuxt.config.ts` for static pre-rendering
- **Dark mode**: Nuxt UI handles this; use `UColorModeButton`

## Styling
- **Tailwind CSS v4**: Imported in `main.css`
- **Nuxt UI**: Imported in `main.css`, provides 100+ components
- **Theme customization**: Use `@theme static` in CSS (e.g., custom colors)
- **Component variants**: Use Nuxt UI's `UButton`, `UCard`, `UHeader`, etc. with built-in themes

## TypeScript
- Strict mode enabled (enforced by `.nuxt/tsconfig.*.json`)
- Use explicit types for props, emits, and state
- `vue-tsc` for type checking
- ESLint (@nuxt/eslint) enforces stylistic rules

## ESLint Configuration
- Base: `@nuxt/eslint` (auto-configured)
- Custom settings in `nuxt.config.ts` > `eslint` object
- Current style: comma-dangle: 'never', brace-style: '1tbs'
- Run `pnpm lint` before committing

## Development Workflow
1. **Create pages** in `app/pages/` (auto-routed via file structure)
2. **Build components** in `app/components/` (auto-imported)
3. **Extract logic** to `app/composables/useXxx.ts` when needed
4. **Style** with Tailwind + Nuxt UI components
5. **Type check**: `pnpm typecheck` to verify no errors
6. **Lint**: `pnpm lint` before PR/commit
7. **Test locally**: `pnpm dev` to verify UX

## Key Documentation
- [Nuxt Docs](https://nuxt.com/docs)
- [Nuxt UI Components](https://ui.nuxt.com)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Vue 3 Guide](https://vuejs.org/guide)
- [Pinia for state management](https://pinia.vuejs.org) (if needed)

## Common Pitfalls
- ❌ Using Options API – use Composition API + `<script setup>` instead
- ❌ Forgetting `lang="ts"` on scripts – always include it
- ❌ Large components with multiple responsibilities – split into smaller ones
- ❌ Importing from `@nuxt/ui` manually – just use components directly (auto-import)
- ❌ Missing `defineProps`/`defineEmits` types – always type these contracts
