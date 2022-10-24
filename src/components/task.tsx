import { Rating } from './rating'

type TaskProps = {
  description: string
  rating: number
  done: boolean
}

export const Task = ({ description, rating, done }: TaskProps): JSX.Element => {
  return (
    <div>
      <div className="single-item">
        <input className="item-checkbox" type="checkbox"></input>
        <div className="item-rating">🗲🗲🗲</div>
        <Rating ratingLevel={rating} />
        <div className="item-description">{description}</div>
        <button className="item-button">Löschen</button>
      </div>
    </div>
  )
}
