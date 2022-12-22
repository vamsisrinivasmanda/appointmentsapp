import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem/index'
import './index.css'

// const initialappointmentsList = [
//  {id: uuidv4(), username: 'vamsi', date: '13 Sep 2022, Thur', isStarred: true},
// ]
class Appointments extends Component {
  state = {
    appointmentsList: initialappointmentsList,
    username: '',
    date: '',
  }

  inputName = event => {
    this.setState({username: event.target.value})
  }

  inputDate = event => {
    this.setState({
      date: format(new Date(event.target.value), 'dd MMM yyyy, EEEE'),
    })
  }

  appointment = event => {
    event.preventDefault()
    const {username, date} = this.state
    const newappointment = {
      id: uuidv4(),
      username,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newappointment],
      username: '',
      date: '',
    }))
  }

  starredBtn = () => {
    const {appointmentsList} = this.state
    console.log('button clicked')
    const filterstarappointment = appointmentsList.filter(
      eachItem => eachItem.isStarred === true,
    )
    this.setState({appointmentsList: filterstarappointment})
  }

  activeStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachappointment => {
        if (eachappointment.id === id) {
          return {...eachappointment, isStarred: !eachappointment.isStarred}
        }
        return eachappointment
      }),
    }))
  }

  render() {
    const {appointmentsList, username, date} = this.state
    console.log(appointmentsList)
    return (
      <div className="bg-container">
        <div className="appointment-container">
          <div className="input-container">
            <h1 className="heading">Add Appointments</h1>
            <form className="form-container" onSubmit={this.appointment}>
              <label htmlFor="text" className="input-label">
                Title
              </label>
              <input
                type="text"
                placeholder="Title"
                className="input"
                onChange={this.inputName}
                value={username}
              />
              <label htmlFor="date" className="date-label">
                Date
              </label>
              <input
                type="date"
                className="date-box"
                onChange={this.inputDate}
                placeholder="Date"
                value={date}
              />
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            alt="appointments"
            className="appointment-image"
          />
        </div>
        <div className="hr-line"> </div>
        <div className="starred-container">
          <h1 className="appointment-heading">Appointments</h1>
          <button
            className="starredbutton"
            onClick={this.starredBtn}
            type="button"
          >
            Starred
          </button>
        </div>
        <ul className="allappointments">
          {appointmentsList.map(eachappointment => (
            <AppointmentItem
              key={eachappointment.id}
              eachappointment={eachappointment}
              activeStarred={this.activeStarred}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Appointments
