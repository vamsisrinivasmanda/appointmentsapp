import './index.css'

const AppointmentItem = props => {
  const {eachappointment, activeStarred} = props
  const {id, username, date, isStarred} = eachappointment
  const starredFunc = () => {
    activeStarred(id)
  }
  const statusofStar = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="each-container" id={id}>
      <div className="card">
        <h3 className="card-heading">{username}</h3>
        <button
          className="card-button"
          onClick={starredFunc}
          type="button"
          testid="star"
        >
          <img src={statusofStar} className="each-image" alt="star" />
        </button>
      </div>
      <p className="date-desc">Date: {date}</p>
    </li>
  )
}
export default AppointmentItem
