import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Pokemon from './components/pokemon/pokemon';

const router = createBrowserRouter([
  {
    path: "/pokemons",
    element: <App />,
  },
  {
    path: "/pokemons/:pokemonId",
    element: <Pokemon />
  },
  {
    path: "*",
    element: <Navigate to={"/pokemons"} />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
