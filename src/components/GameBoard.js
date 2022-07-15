import Card from './Card'

export default function GameBoard(props) {
  return (
    <ul>
      {props.pokemonDB.map((card) => (
        <li key={card.name}>
          <Card card={card} handleClick={props.handleCardClick}/>
        </li>
      ))}
    </ul>
  )
}