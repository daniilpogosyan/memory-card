import './styles/ScoreBoard.css'

export default function ScoreBoard(props) {
  return (
    <div className='scoreBoard'>
      <p className="score">Score: <span className="score__value">{props.score}</span></p>
      <p className="score">Best score <span className="score__value">{props.bestScore}</span></p>
    </div>
  )
}