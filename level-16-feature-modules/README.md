# Level 16 - Feature Modules and Scalable Architecture

// Project: Admin operations portal
// Stack: React + Vite + JavaScript
// Goal: practice the current syllabus level with production-minded structure

## Focus

- feature-first architecture
- module boundaries
- shared UI vs feature UI
- service reuse

## Build targets

- AuthModule
- UsersModule
- ProductsModule
- ReportsModule
- SettingsModule

## Structure notes

- Keep shared UI in `src/components/ui`.
- Add feature code under `src/features`.
- Move API logic into `src/services` as soon as requests are introduced.
- Keep comments short and explain intent, not obvious syntax.
