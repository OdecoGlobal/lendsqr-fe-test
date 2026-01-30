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
- Login page with client-side validation and persistent login state using localStorage
- User page with:
  - Pagination (10 users per page)
  - Filtering
  - Status badges
  - Action Menu
- User details page with persistent user data across page refresh
- Unit testing with positive and negative scenarios

## Project Structure

```
public/
├── data            # Mocked user data from Mockaroo
src/
├── assets          # Icons, logos, and images from the Figma file
├── components/     # Reusable UI components (Card, Button, Pagination, Table, Filter, etc.)
├── pages/          # Route-level pages (Login, Dashboard, Users, UserDetails)
├── lib/            # Utility functions (formatCurrency, formatDateTime, auth helpers)
├── types/          # Typescript interfaces
├── styles/         # SCSS variables, mixins, and global styles

The project follows a component-driven architecture with separation between UI components, page-level logic, and services. This improves scalability and maintainability.
```

## Screenshots

![Login](public\login.png)

- Login page

![Login](public\error-login.png)

- Login page showing validation errors

![Login](public\dashboard.png)

- User Dashboard

![Login](public\user-details.png)

- User Details Page

## State Management

- React hooks (useState, useEffect) were used for state management
  Filtering and pagination are derived from the main user dataset to avoid duplicated state

## Mock API

- A dataset of 500 users was generated from Mockaroo and served locally
- Axios is used to simulate API calls
- Pagination and filtering are handled client-side to mimic server behavior

## Login Persistence (LocalStorage)

- Login state is stored in localStorage to persist across refreshes
- Users cannot access protected routes without logging in
- If a logged-in user visits /login, they are redirected to /dashboard

- Logout clears the localStorage and redirects back to /login

### Implementation

```Javascript
export const isAuthenticated = () => localStorage.getItem('isAuthenticated') === 'true';
export const login = () => localStorage.setItem('isAuthenticated', 'true');
export const logout = () => localStorage.removeItem('isAuthenticated');

```

### Route protection

```JavaScript
<Route element={<ProtectedRoute />}>
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/users" element={<Users />} />
</Route>

useEffect(() => {
  if (isAuthenticated()) navigate('/dashboard');
}, [navigate]);


```

## Running the Project

```bash
git clone https://github.com/OdecoGlobal/lendsqr-fe-test
cd lendsqr-fe-test
npm install
npm run dev

```

## Notes & Decisions

- LocalStorage is used to persist login state; user details are stored temporarily
- Client-side pagination and filtering are used because the mock API returns static data
- Reusable components (Card, Button, Table, Badge, etc.) were created to improve maintainability
- The project was implemented with a mobile-first SCSS strategy for responsive design
- Unit tests include positive and negative scenarios for key functions and components

## Test Coverage

Unit testing was implemented using **Vitest** and **React Testing Library**.  
Tests cover both **positive** and **negative** scenarios for key functions and components.

### Utilities

| Function                                      | Positive Scenario                                                         | Negative Scenario                                        |
| --------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------- |
| `formatCurrency`                              | Correctly formats numbers and numeric strings to NGN currency             | Handles `null` or non-numeric strings gracefully         |
| `formatDateTime`                              | Formats valid Date objects correctly (`dateTime`, `dateOnly`, `timeOnly`) | Handles `null` or invalid dates without breaking         |
| `auth` (`login`, `logout`, `isAuthenticated`) | Persists login state and redirects logged-in users correctly              | Prevents access to protected routes when unauthenticated |

### Components

| Component     | Positive Scenario                                         | Negative Scenario                                             |
| ------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| `Login`       | Valid input allows login and sets localStorage            | Empty or invalid input shows validation errors                |
| `Table`       | Renders fetched users correctly; displays loading state   | Shows empty state when no users; handles pagination correctly |
| `TableFilter` | Filters users based on criteria; resets filters correctly | Handles reset without errors                                  |
| `Pagination`  | Navigates between pages correctly                         | Handles invalid page numbers gracefully                       |

> Tests simulate user interactions such as input changes, button clicks, filtering, and page navigation to ensure the UI behaves correctly under expected and unexpected conditions.
