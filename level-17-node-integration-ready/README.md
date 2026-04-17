# Level 17 - Backend-Ready Integration Patterns

// Project: Order management frontend
// Stack: React + Vite + JavaScript
// Goal: practice the current syllabus level with production-minded structure

## Focus

- request and response contracts
- payload shaping
- auth headers
- backend validation errors
- status-driven UI

## Build targets

- OrdersPage
- OrderDetail
- StatusUpdateForm
- CustomerSummary
- ApiErrorMap

## Structure notes

- Keep shared UI in `src/components/ui`.
- Add feature code under `src/features`.
- Move API logic into `src/services` as soon as requests are introduced.
- Keep comments short and explain intent, not obvious syntax.
