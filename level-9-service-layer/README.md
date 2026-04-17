# Level 9 - Service Layer and API Architecture

// Project: User directory admin panel
// Stack: React + Vite + JavaScript
// Goal: practice the current syllabus level with production-minded structure

## Focus

- service layer
- request helpers
- base URL config
- query params
- separation of concerns

## Build targets

- UsersPage
- UsersTable
- UserFilters
- UserDetailCard
- ApiStatusPanel

## Structure notes

- Keep shared UI in `src/components/ui`.
- Add feature code under `src/features`.
- Move API logic into `src/services` as soon as requests are introduced.
- Keep comments short and explain intent, not obvious syntax.
