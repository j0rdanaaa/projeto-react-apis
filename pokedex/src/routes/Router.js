import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonListPage } from "../Pages/PokemonsListPage/PokemonsListPage";
import { PokeDexPage } from "../Pages/PokedexPage/PokedexPage";
import { PokemonDetailPage } from "../Pages/PokemonDetailPage/PokemonDetailPage";
import Header from "../Components/Header/Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index="/" element={<PokemonListPage />} />
        <Route path="/pokedex" element={<PokeDexPage />} />
        <Route path="/pokedetail/" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
