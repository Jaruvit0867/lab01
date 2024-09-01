"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

interface PokemonList {
  count: number;
  next: string;
  previous?: any;
  results: Pokemon[];
}

interface Pokemon {
  name: string;
  url: string;
}

export default function Page() {
  const [pokemonData, setPokemonData] = React.useState<PokemonList>({ results: [] } as PokemonList);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(0);
  const [hasMore, setHasMore] = React.useState<boolean>(true);

  React.useEffect(() => {
    const getData = async (url: string) => {
      setLoading(true);
      try {
        const result = await fetch(url);
        const res = await result.json();
        setPokemonData((prevData) => ({
          ...res,
          results: [...prevData.results, ...res.results],
        }));
        setHasMore(!!res.next);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getData(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`);
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const DisplayPokemonList = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (pokemonData.results.length > 0) {
      return (
        <ul className={styles.pokemonList}>
          {pokemonData.results.map((p, index) => (
            <li key={p.name} className={styles.pokemonItem}>
              <img
                className={styles.cardImgTop}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1 + page * 20}.png`}
                alt={p.name}
              />
              <Link href={`/pokemon/${p.name}`} className={styles.pokemonLink}>
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      );
    }

    return <p>ไม่เจอโปเกมอน</p>;
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt="Pokémon Logo"
      />
      <DisplayPokemonList />
      {hasMore && (
        <button className={styles.loadMoreButton} onClick={loadMore} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}
