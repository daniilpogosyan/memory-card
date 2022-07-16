import { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import './App.css'
function App() {
  const [pokemonDB, setPokemonDB] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  async function getPokemonById(id) {
    const capitalize = (word) => {
      if (word.charAt(0) >= 'a' && word.charAt(0) <= 'z') {
          const initLetter = String.fromCharCode(word.charCodeAt(0) - 32);
          return [initLetter, word.slice(1)].join('');
      }
      return word
    }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return {
      name: capitalize(data.name),
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
      <header className="header">
        <div>
          <h1 className="header__heading">Memory Card</h1>
          <p className="instructions">Catch every pokemon, but DO NOT catch the same pokemon twice!</p>
        </div>
        <ScoreBoard score={score} bestScore={bestScore}/>
      </header>
      <GameBoard pokemonDB={pokemonDB} handleCardClick={handleCardClick}/>
    </div>
  );
}

export default App;
