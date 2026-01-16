# Movie Directory App

A React-based movie directory application that allows users to browse directors and their films. Built with React Router v6 for seamless client-side navigation.

## Features

- **Browse Directors**: View a comprehensive list of film directors
- **Director Details**: See individual director information and their filmography
- **Add Directors**: Create new director entries with name and biography
- **Add Movies**: Add movies to a director's filmography
- **Movie Details**: View detailed information about individual movies including duration and genres
- **Nested Routing**: Intuitive URL structure with nested routes
- **Responsive Navigation**: NavBar with active link highlighting

## Technologies Used

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **JSON Server** - Mock REST API
- **Vitest** - Testing framework
- **React Testing Library** - Component testing

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shobinn24/react-router-v6-putting-it-all-together-lab.git
cd react-react-router-v6-putting-it-all-together-lab
```

2. Install dependencies:
```bash
npm install
```

3. Start the JSON server (runs on port 3000):
```bash
npm run server
```

4. In a separate terminal, start the development server:
```bash
npm run dev
```

5. Open your browser to `http://localhost:5173`

## Running Tests
```bash
npm test
```

## Project Structure
```
src/
├── components/
│   ├── NavBar.jsx          # Navigation component
│   └── NavBar.css          # Navigation styles
├── pages/
│   ├── Home.jsx            # Home page
│   ├── About.jsx           # About page
│   ├── DirectorContainer.jsx  # Parent route for directors
│   ├── DirectorList.jsx    # List of all directors
│   ├── DirectorForm.jsx    # Form to add new directors
│   ├── DirectorCard.jsx    # Individual director details
│   ├── MovieForm.jsx       # Form to add new movies
│   └── MovieCard.jsx       # Individual movie details
├── App.jsx                 # Main app with routes
└── main.jsx                # App entry point
```

## Route Structure
```
/                           → Home
/about                      → About
/directors                  → DirectorContainer
  ├── (index)              → DirectorList
  ├── new                  → DirectorForm
  └── :id                  → DirectorCard
      ├── movies/new       → MovieForm
      └── movies/:movieId  → MovieCard
```

## Learning Objectives

This project demonstrates:

- React Router v6 setup with BrowserRouter
- Nested routing architecture
- Using `<Outlet />` to render child routes
- `useParams()` hook for URL parameters
- `useNavigate()` hook for programmatic navigation
- `useOutletContext()` for passing data between nested routes
- `NavLink` for navigation with active states
- Dynamic route handling

## Author

**Shobinn Clark**
- GitHub: [@shobinnclark](https://github.com/shobinn24)


## License

This project is part of the Flatiron School curriculum.

## Acknowledgments

- Flatiron School for the project structure and requirements
- React Router documentation for routing guidance