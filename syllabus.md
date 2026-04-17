# React Practical Syllabus

// Stack: React + Vite + JavaScript
// No TypeScript
// No Tailwind
// Goal: learn React by building production-style projects
// Rule: every level should follow scalable folder structure and clean separation of concerns

## Base rules for every level

// Architecture rules used in all projects

- Vite + React + JavaScript only
- feature-first scalable structure
- components should stay small and readable
- UI logic, API logic, and reusable utilities should stay separated
- use plain CSS modules or organized CSS files
- no random file dumping inside `src`
- no giant `App.jsx` projects after beginner levels
- every async UI should have loading, empty, success, and error handling where relevant
- naming should stay simple and consistent

## Standard scalable folder structure

// Reuse this structure from early levels onward

```text
src/
  app/
    routes/
    providers/
  components/
    ui/
  features/
    feature-name/
      components/
      hooks/
      services/
      pages/
      utils/
      styles/
  hooks/
  services/
  utils/
  styles/
  assets/
```

## Level 0 - Vite setup and component basics

// Goal: understand real project bootstrapping

**Folder:** `level-0-vite-react-basics`

**Project:** Personal profile dashboard

**Focus topics:**

- Vite project structure
- JSX
- functional components
- props
- importing assets
- basic CSS organization
- splitting UI into small components

**Build:**

- header
- profile card
- skills section
- project cards
- footer

**Production rules introduced:**

- create separate component files
- keep styles out of one giant file
- use meaningful names

## Level 1 - State and UI interaction

// Goal: control UI through local state

**Folder:** `level-1-ui-state-playground`

**Project:** Interactive productivity widgets

**Focus topics:**

- `useState`
- toggles
- counters
- tab switchers
- accordion
- theme switch
- derived state

**Build:**

- tab system
- FAQ accordion
- character counter
- dark/light toggle
- dismissible alerts

**Production rules introduced:**

- local state should stay close to where it is used
- avoid duplicated state
- split each widget into its own component

## Level 2 - Lists, forms, and controlled inputs

// Goal: handle user input and dynamic rendering cleanly

**Folder:** `level-2-forms-and-lists`

**Project:** Task manager

**Focus topics:**

- controlled inputs
- list rendering
- `key` usage
- add, edit, delete
- filter tasks
- form submit handling
- empty state rendering

**Build:**

- add task form
- task list
- task filters
- edit mode
- completed status

**Production rules introduced:**

- keep form logic readable
- avoid deeply nested JSX
- use clear event handler naming

## Level 3 - useEffect and side effects

// Goal: understand external side effects correctly

**Folder:** `level-3-effects-and-sync`

**Project:** Notes app with local persistence

**Focus topics:**

- `useEffect`
- dependency arrays
- localStorage sync
- cleanup basics
- search input syncing

**Build:**

- create note
- save note to localStorage
- note search
- auto-selected active note

**Production rules introduced:**

- do not misuse `useEffect` for everything
- keep side effect logic separate from render logic
- extract repeated logic into helpers

## Level 4 - Routing and layouts

// Goal: move from single-page widget apps to app structure

**Folder:** `level-4-routing-and-layouts`

**Project:** Multi-page company website dashboard shell

**Focus topics:**

- React Router
- routes
- nested routes
- route params
- shared layouts
- 404 page

**Build:**

- home page
- about page
- services page
- contact page
- product detail page using route params
- not found page

**Production rules introduced:**

- pages go in page-level folders
- layouts remove repeated markup
- route structure should stay predictable

## Level 5 - Reusable UI system

// Goal: stop rebuilding the same UI repeatedly

**Folder:** `level-5-ui-foundations`

**Project:** Internal design system starter

**Focus topics:**

- reusable button
- reusable input
- reusable card
- reusable modal
- reusable badge
- shared form field wrapper

**Build:**

- UI component showcase page
- modal demo
- form controls demo
- alert and badge system

**Production rules introduced:**

- shared UI belongs in `components/ui`
- prefer composition over copy-paste
- component API should stay simple

## Level 6 - Custom hooks

// Goal: move reusable logic out of components

**Folder:** `level-6-custom-hooks`

**Project:** Utility dashboard

**Focus topics:**

- custom hooks
- `useToggle`
- `useDebounce`
- `useLocalStorage`
- `usePagination`
- separating logic from UI

**Build:**

- debounced search box
- saved preferences panel
- paginated mock list
- modal with reusable toggle hook

**Production rules introduced:**

- repeated logic moves to hooks
- hooks should stay focused and predictable
- UI components should not carry all business logic

## Level 7 - CSS architecture and responsive design

// Goal: build scalable styling habits without Tailwind

**Folder:** `level-7-responsive-css-architecture`

**Project:** SaaS landing page

**Focus topics:**

- CSS modules or structured CSS
- layout systems
- flexbox and grid
- spacing scale
- typography scale
- breakpoints
- responsive sections

**Build:**

- hero section
- pricing cards
- testimonials
- FAQ
- responsive navbar
- mobile menu

**Production rules introduced:**

- define style conventions early
- avoid random spacing values
- keep component styles local where possible

## Level 8 - Data fetching and API states

// Goal: connect React to real data

**Folder:** `level-8-api-fetching`

**Project:** Blog explorer

**Focus topics:**

- fetching API data
- loading states
- error states
- empty states
- request lifecycle
- basic search

**Build:**

- posts list page
- post detail page
- search input
- retry state

**Production rules introduced:**

- components should not assume request success
- async UI must show visible status
- keep request code readable

## Level 9 - Service layer and API architecture

// Goal: structure frontend code for backend integration

**Folder:** `level-9-service-layer`

**Project:** User directory admin panel

**Focus topics:**

- API service files
- request helpers
- base URL management
- separating components from request logic
- query params handling

**Build:**

- user listing
- user detail page
- filtered list
- reusable API functions

**Production rules introduced:**

- do not fetch directly in every component
- centralize API calls in `services`
- design response handling for future Node backend compatibility

## Level 10 - Authentication flow

// Goal: build real auth-aware frontend behavior

**Folder:** `level-10-auth-foundation`

**Project:** Auth-ready workspace app

**Focus topics:**

- login page
- signup page
- logout
- auth state
- token storage basics
- protected routes
- auth-aware navbar

**Build:**

- public routes
- private dashboard route
- login form
- signup form
- logout button
- redirect on unauthorized access

**Production rules introduced:**

- auth logic should not be scattered
- route protection should be reusable
- session state should be predictable

## Level 11 - Context API for app-level state

// Goal: manage shared app state correctly

**Folder:** `level-11-context-state`

**Project:** Workspace settings panel

**Focus topics:**

- Context API
- provider structure
- auth context
- preferences context
- reducing prop drilling

**Build:**

- user preferences
- layout preferences
- saved theme mode
- global notification visibility state

**Production rules introduced:**

- Context is for shared app state, not everything
- keep providers organized under app-level structure
- avoid overloading one context with unrelated data

## Level 12 - Production-grade forms

// Goal: handle complex forms like real products

**Folder:** `level-12-advanced-forms`

**Project:** Profile and account settings app

**Focus topics:**

- multi-field forms
- validation
- touched/error states
- async submit
- prefilled edit forms
- file input basics

**Build:**

- profile update form
- password change form
- avatar upload UI
- account settings form

**Production rules introduced:**

- server errors and field errors should display clearly
- submit state must be visible
- forms should be broken into manageable sections

## Level 13 - CRUD architecture

// Goal: learn feature building end to end

**Folder:** `level-13-crud-operations`

**Project:** Product inventory manager

**Focus topics:**

- create
- read
- update
- delete
- detail page
- edit page
- confirmation flows

**Build:**

- product list
- add product form
- product detail
- edit product form
- delete confirmation modal

**Production rules introduced:**

- organize code feature-first
- list, detail, form, and service layers should stay separated
- CRUD should feel consistent across screens

## Level 14 - Search, filter, sort, pagination

// Goal: build real dashboard data controls

**Folder:** `level-14-data-controls`

**Project:** Customer management dashboard

**Focus topics:**

- debounced search
- filters
- sort controls
- pagination
- query params syncing

**Build:**

- searchable customer table
- filter sidebar
- sort dropdown
- paginated result list
- query-param-driven state

**Production rules introduced:**

- shareable URLs matter in real apps
- filter state should stay structured
- data controls should scale with backend APIs

## Level 15 - Error handling and feedback systems

// Goal: make the UI resilient and usable

**Folder:** `level-15-resilient-ui`

**Project:** Support tickets dashboard

**Focus topics:**

- error boundaries
- route errors
- toasts
- alerts
- retry actions
- skeleton loading
- permission denied states

**Build:**

- ticket list page
- ticket detail page
- retry fetch actions
- toast system
- empty and permission states

**Production rules introduced:**

- users should always know what is happening
- failures should not collapse the full app
- feedback patterns should be shared and reusable

## Level 16 - Feature modules and scalable architecture

// Goal: move into industrial folder structure

**Folder:** `level-16-feature-modules`

**Project:** Admin operations portal

**Focus topics:**

- feature-first architecture
- module separation
- app-level routing structure
- shared UI vs feature UI
- service reuse across modules

**Build:**

- auth feature
- users feature
- products feature
- reports feature
- settings feature

**Production rules introduced:**

- code should scale by module, not by dumping files into common folders
- features own their pages, components, and services
- shared code should stay truly shared

## Level 17 - Backend-ready integration patterns

// Goal: think like a full product engineer

**Folder:** `level-17-node-integration-ready`

**Project:** Order management frontend

**Focus topics:**

- request/response contracts
- payload shaping
- auth headers
- token-based request flow
- handling backend validation errors
- status-driven UI

**Build:**

- orders list
- order details
- update status form
- customer summary
- API error mapping to UI

**Production rules introduced:**

- frontend should respect backend contracts
- request payloads should be intentional
- backend error messages should be translated into usable UI feedback

## Level 18 - Performance and route optimization

// Goal: improve app behavior at scale

**Folder:** `level-18-performance-basics`

**Project:** Media content dashboard

**Focus topics:**

- lazy-loaded routes
- heavy component splitting
- avoiding unnecessary re-renders
- optimized rendering for larger lists
- image loading awareness

**Build:**

- media list
- media details
- analytics widget section
- route-level lazy loading

**Production rules introduced:**

- optimize where users actually feel slowness
- large sections should not block initial UI
- keep performance fixes understandable

## Level 19 - Testing critical app flows

// Goal: verify real behavior, not just syntax

**Folder:** `level-19-react-testing`

**Project:** Account and billing frontend

**Focus topics:**

- component tests
- interaction tests
- form tests
- auth flow tests
- API state tests

**Build:**

- billing page
- subscription form
- invoice list
- protected billing route
- test suite for critical flows

**Production rules introduced:**

- test business-critical behavior first
- avoid brittle implementation-detail tests
- write tests that reflect user actions

## Level 20 - Final production-style product

// Goal: combine everything into one startup-grade frontend

**Folder:** `level-20-startup-frontend`

**Project:** SaaS team collaboration platform

**Core modules:**

- authentication
- dashboard
- projects
- tasks
- team members
- settings
- notifications

**Topics covered together:**

- scalable folder structure
- routing and layouts
- reusable UI system
- forms
- Context
- service layer
- protected routes
- CRUD
- search and filters
- pagination
- responsive design
- loading and error systems
- backend-ready API structure
- performance basics
- testing core flows

**Expected architecture:**

```text
src/
  app/
    providers/
    routes/
  components/
    ui/
  features/
    auth/
    dashboard/
    projects/
    tasks/
    team/
    settings/
    notifications/
  hooks/
  services/
  utils/
  styles/
```

**Production standard at this level:**

- feature-based modular structure
- reusable UI primitives
- isolated service layer
- clear route hierarchy
- error and loading coverage
- responsive layouts
- maintainable naming and file boundaries

## How to use this syllabus

// Execution rule for best results

1. Build one level at a time.
2. Finish the full project, not only isolated components.
3. Refactor structure when complexity increases.
4. Keep old levels simple and newer levels closer to real startup products.
5. Do not skip the architecture rules even in small projects.

## Final result after level 20

// Outcome

After completing these 21 levels, you should be able to:

- build React apps with scalable architecture
- structure frontend projects for future Node.js integration
- handle auth, forms, CRUD, routing, and API flows cleanly
- build responsive and maintainable product UIs
- think in feature modules instead of tutorial files
