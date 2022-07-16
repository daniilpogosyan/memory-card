import Card from './Card'
import './styles/GameBoard.css'

export default function GameBoard(props) {
  function shuffle(cards) {
    //get copy of DB
    const shuffledCards = cards.map(card => ({...card}));

    //shuffle
    for (let i = 0; i < cards.length; i++) {
      const randIndex = Math.floor(Math.random() * cards.length);
      const temp = shuffledCards[i];
      shuffledCards[i] = shuffledCards[randIndex];
      shuffledCards[randIndex] = temp;
    }
    return shuffledCards;
  }
  
  return (
    <ul className='gameBoard'>
      {shuffle(props.pokemonDB).map((card) => (
        <li key={card.name}>
          <Card card={card} handleClick={props.handleCardClick}/>
        </li>
      ))}
    </ul>
  )
}