import React, {Component} from "react";
import FriendApiService from '../../services/friend-api-services'
import EventApiService from '../../services/event-api-services'

export default class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      selectedFriends: [],
      title:''
    };
  }
  static defaultProps ={
    history:{
        push:() => {},
    },
}
  setFriends = friends => {
    this.setState({ friends })
  }
  componentDidMount(){
    FriendApiService.getFriends()
      .then(this.setFriends)
  }
  
  selectFriend(e, friend) {
    e.preventDefault();
    let newSelectedFriends;
    console.log("newEvents available friends", this.state.friends)
    if (this.state.selectedFriends.includes(friend)) {
      newSelectedFriends = this.state.selectedFriends.filter(
        selectedFriend => selectedFriend.id !== friend.id
      );
    } else {
      newSelectedFriends = [...this.state.selectedFriends, friend];
    }
    this.setState({
      selectedFriends: newSelectedFriends
    });
    console.log("selected Friends", this.state.selectedFriends)
  }
  onSubmit(e) {
    e.preventDefault();
    const {title, description, date, time, place} = e.target;
    const newEvent = {
      title: title.value, 
      details: description.value,
      meeting_day: date.value, 
      meeting_time: time.value, 
      place: place.value
    }

    EventApiService.addEvent(newEvent)
    .then(event=> {
      console.log(typeof event.id)
      const friendsId = this.state.selectedFriends
      console.log(friendsId);
      let participants = []; 
      for (let i=0; i<friendsId.length; i++){
      participants[i]={
        user_id: friendsId,
        attending: 'pending'
      }
    }
      console.log(participants);
      EventApiService.addEventParticipants(event.id, participants)
      this.props.history.push(`events/${event.id}`)
    })
  }
  render() {
    
    return (
        <section className="event container">
        <h2>New Event</h2>
        <div className="button-box">
            <button type="button">Close</button>
        </div>  
        <form onSubmit={e => this.onSubmit(e)}>
            <div className="eventTitle">
                <label htmlFor="title">Title:</label>
                <input required name="title"/>
            </div>
            <div className="eventDescription">
                <label htmlFor="description">Description:</label>
                <input name="description"/>
            </div>
            <div className="eventDay">
                <label htmlFor="day">Date:</label>
                <input type="date" name="date"/>
            </div>
            <div className="eventDescription">
                <label htmlFor="time">Time:</label>
                <input type="time" name="time" />
            </div>
            <div className="eventPlace">
                <label htmlFor="place">Place:</label>
                <input type="place" name="place"/>
            </div>
            <div className="attendees">
          {
            this.state.friends.map(friend => {
            if (this.state.selectedFriends.includes(friend.id)) {
              return (
                <div
                  key={friend.id}
                  className="selected"
                  onClick={e => this.selectFriend(e, friend)}
                >
                  <img src={friend.image} className="account logo" alt="headshot of the account holder"/>
                  <p>{friend.user_name}</p>
                </div>
              );
            }
            return (
              <div
                key={friend.id}
                onClick={e => this.selectFriend(e, friend)}
              >
                <img src={friend.image} className="account logo" alt="headshot of the account holder"/>
                <p>{friend.user_name}</p>
              </div>
            );
          })}
          </div>
          <div className="button-box">
                <button type="submit">Create</button>
            </div>
        </form>
      </section>
    );
  }
}
