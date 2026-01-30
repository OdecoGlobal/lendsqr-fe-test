# Lendsqr Frontend Engineering Assesment

## Live Demo

[Demo](https://okechukwu-chidera-lendsqr-fe-test.odeco.dev/)
[Github](https://github.com/OdecoGlobal/lendsqr-fe-test)

## Tech Stack

- React + Typescript
- SCSS
- Axios (mock API)
- Vitest + React Testing Library

## Features

- Pixel-perfect implementation from Figma design
- Responsive layout for mobile, tablet, and desktop.
- Styled using a mobile-first approach by utilizing SCSS mixin feature
- Login page with validation
- User page with:
- Pagination (10 users per page)
- Filtering
- Status badges
- Action Menu
- User details page with persistent data
- Unit testing with positive and negative scenarios

## Project Structure

```
public/
├── data            #Generated mocked data from Mockaroo
src/
├── components/     # Reusable UI components
├── pages/          # Route-level pages
├── lib/            # utility functions
├── types/          # Typescript interfaces
├── styles/         # SCSS variables and global styles
├── assets          # Different icons and logo gotten from the Figma file

The project follows a component-driven architecture with separation between UI components, page-level logic, and services. This improves scalability and maintainability.
```

## State Management

React hooks were used for state management. Filtering and pagination are derived from the main user dataset rather than duplicated state to avoid inconsistencies.

## Mock API

A mock dataset of 500 users was generated from Mockaroo and served locally. Axios was used to simulate API calls. Pagination and filtering were handled client-side to mimic server behavior.

## Running the Project

```bash
git clone https://github.com/OdecoGlobal/lendsqr-fe-test
cd lendsqr-fe-test
npm install
npm run dev

```

## Notes & Decisions

- Data was used was stored locally so there was no need to persist the user's details in localStorage or indexDB
- Client-side pagination was used since the mock API returns static data
- Reusable components were created for badges, cards, buttons and layouts to improve maintainability
