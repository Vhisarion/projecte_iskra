import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Pokemon from './components/pokemon/pokemon';
import { RecoilRoot } from 'recoil';
import Homepage from './components/homepage/Homepage';
import PokemonSuspense from './components/pokemon-suspense/PokemonSuspense';

const router = createBrowserRouter([
  {
    path: "/pokemons",
    element: <Homepage />,
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
    <RecoilRoot>
      <PokemonSuspense>
        <RouterProvider router={router} />
      </PokemonSuspense>
    </RecoilRoot>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
