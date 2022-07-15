export default function Card(props) {
  return (
    <article onClick={(e) => props.handleClick(e, props.card.name)}>
      <img src={props.card.imgUrl} alt={props.card.name} />
      <span>{props.card.name}</span>
    </article>
  )
}