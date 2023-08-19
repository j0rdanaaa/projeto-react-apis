import React from "react";
import {
  PokeLogo,
  PokeDexButton,
  HeaderMain,
  ContainerPokedex,
  P,
  P2,
  PokeRemove,
  ContainerPokeRemove,
  ContainerPokeAdd,
  PokeAdd,
} from "./HeaderStyle";
import PokemonLogo from "../../assets/LogoPoke.png";

import { goToHome, goToPokeDex } from "../../routes/coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import { PokeHomeLink } from "./HeaderStyleTwo";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { pokedex, pokeInfo, removeFromPokedex, addToPokedex, catchPokemon } =
    context;
  const filterPokedex = pokedex.find((pokemon) => {
    return pokemon.name === catchPokemon.name;
  });

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <HeaderMain>
            <PokeLogo src={PokemonLogo} />

            <ContainerPokedex>
              <PokeDexButton
                onClick={() => {
                  goToPokeDex(navigate);
                }}
              >
                <P>Pokédex</P>
              </PokeDexButton>
            </ContainerPokedex>
          </HeaderMain>
        );
      case "/pokedex":
        return (
          <HeaderMain>
            <PokeHomeLink
              onClick={() => {
                goToHome(navigate);
              }}
            >
              {"<"} <b>Todos Pokémons</b>
            </PokeHomeLink>
            <PokeLogo src={PokemonLogo} />
          </HeaderMain>
        );

      case `/pokedetail`:
        return (
          <HeaderMain>
            <PokeHomeLink
              onClick={() => {
                goToHome(navigate);
              }}
            >
              {"<"} <b>Todos Pokémons</b>
            </PokeHomeLink>
            <PokeLogo src={PokemonLogo} />

            {filterPokedex ? (
              <ContainerPokeRemove>
                <PokeRemove
                  onClick={() => {
                    removeFromPokedex(pokeInfo);
                  }}
                >
                  <P2>Excluir da Pokédex</P2>
                </PokeRemove>
              </ContainerPokeRemove>
            ) : (
              <ContainerPokeAdd>
                <PokeAdd
                  onClick={() => {
                    addToPokedex(catchPokemon);
                  }}
                >
                  <P2>Adicionar na Pokédex</P2>
                </PokeAdd>
              </ContainerPokeAdd>
            )}
          </HeaderMain>
        );

      default:
        return (
          <>
            <HeaderMain>
              <PokeHomeLink
                onClick={() => {
                  goToHome(navigate);
                }}
              >
                {"<"} <b>Todos Pokémons</b>
              </PokeHomeLink>
              <PokeLogo src={PokemonLogo} />
            </HeaderMain>
          </>
        );
    }
  };

  return <>{renderHeader()}</>;
}

export default Header;
