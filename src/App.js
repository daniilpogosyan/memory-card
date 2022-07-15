import { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [pokemonDB, setPokemonDB] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  async function getPokemonById(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return {
      name: data.name,
      imgUrl: data.sprites.front_default
    }
  }

  useEffect(() => {
    const pokemonsIds = [1,2,3,4,5];
    Promise.all(pokemonsIds.map(async (id) => getPokemonById(id)))
      .then((pokemons => setPokemonDB(pokemons)))
  }, []);

  const handleCardClick = (event, name) => {
    if (pickedCards.includes(name)) {
      setScore(0);
      setPickedCards([]);
      return;
    }
    setPickedCards([...pickedCards, name])
    const nextScore = score + 1;
    setScore(nextScore);
    if (nextScore > bestScore)
      setBestScore(nextScore)
  }


  return (
    <div className="App">
      <ScoreBoard score={score} bestScore={bestScore}/>
      <GameBoard pokemonDB={pokemonDB} handleCardClick={handleCardClick}/>
    </div>
  );
}

export default App;
