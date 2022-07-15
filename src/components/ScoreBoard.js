export default function ScoreBoard(props) {
  return (
    <div>
      <p>Score: <span>{props.score}</span></p>
      <p>Best score <span>{props.bestScore}</span></p>
    </div>
  )
}