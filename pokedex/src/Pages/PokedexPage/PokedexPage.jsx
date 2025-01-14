import React, { useContext } from "react";
import {
  PokeMain,
  ListTitle,
  Display,
} from "../PokemonsListPage/PokemonsListPageStyle";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { GlobalContext } from "../../context/GlobalContext";

export function PokeDexPage() {
  const context = useContext(GlobalContext);
  const { pokedex } = context;

  return (
    <div>
      <PokeMain>
        <ListTitle>Meus Pokémons</ListTitle>
        <Display>
          {pokedex.map((pokemon) => {
            return (
              <PokemonCard
                key={pokedex.id}
                pokemon={pokemon}
                pokedex={pokedex}
              />
            );
          })}
        </Display>
      </PokeMain>
    </div>
  );
}
