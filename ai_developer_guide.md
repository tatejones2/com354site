# AI Developer Guide - com354site

## Project Overview
This project is a personal or course website for COM354. It is built using **React** and **Vite**. The goal is to create a high-quality, responsive, and visually appealing website.

## Technology Stack
- **Framework**: React 19+
- **Build Tool**: Vite
- **Language**: JavaScript (ESModule)
- **Styling**: Vanilla CSS (CSS Variables for theming recommended) or CSS Modules. Avoid adding heavy UI libraries unless requested.
- **Linting**: ESLint

## Design & Aesthetics
- **Visual Style**: Modern, clean, and "premium". Use harmonious color palettes and good typography (e.g., Inter, Roboto).
- **Responsiveness**: Mobile-first approach. Ensure layouts work on all device sizes.
- **Interactivity**: Use subtle hover effects and smooth transitions to make the site feel alive.

## Development Rules
1.  **Component Structure**:
    -   Use Functional Components with Hooks.
    -   Keep components small, focused, and reusable.
    -   Place components in `src/components/`.
2.  **State Management**:
    -   Use `useState` and `useContext` for local/global state.
    -   Avoid over-engineering state for simple pages.
3.  **Code Quality**:
    -   Follow ESLint rules.
    -   Write self-documenting code with meaningful variable names.
    -   Remove unused imports and dead code.
4.  **Routing**:
    -   If multiple pages are needed, use `react-router-dom` (install if missing).

## Workflow for AI Agents
1.  **Plan**: Understand the requirement and check `task.md`.
2.  **Edit**: Make changes to `src/` and verify immediately.
3.  **Verify**: Ensure the build runs (`npm run dev` or `npm run build`) and no lint errors exist.
4.  **Document**: Update `walkthrough.md` with changes and screenshots if possible.
