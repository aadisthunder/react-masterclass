# Level 11 - Context API for App-Level State

// Project: Workspace settings panel
// Stack: React + Vite + JavaScript
// Goal: practice the current syllabus level with production-minded structure

## Focus

- Context API
- provider structure
- shared app state
- reducing prop drilling

## Build targets

- SettingsProvider
- PreferencesPanel
- ThemeSwitch
- NotificationBanner
- SettingsShell

## Structure notes

- Keep shared UI in `src/components/ui`.
- Add feature code under `src/features`.
- Move API logic into `src/services` as soon as requests are introduced.
- Keep comments short and explain intent, not obvious syntax.
