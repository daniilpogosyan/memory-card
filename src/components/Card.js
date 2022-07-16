import './styles/Card.css'

export default function Card(props) {
  return (
    <article
      className="card"
      onClick={(e) => props.handleClick(e, props.card.name)}>
      <img 
        className="card__img"
        src={props.card.imgUrl}
        alt={props.card.name} />
      <span className="card__title">{props.card.name}</span>
    </article>
  )
}