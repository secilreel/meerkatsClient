import React, {Component} from "react";
import account from '../../Images/account.jpg';

export default class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        { id: 1, name: "Irem", img: `${account}` },
        { id: 2, name: "Wens", img: `${account}` },
        { id: 3, name: "Alex", img: `${account}` }
      ],
      selectedFriends: []
    };
  }
  selectFriend(e, id) {
    e.preventDefault();
    let newSelectedFriends;
    console.log(this.state.selectedFriends.includes(id));
    if (this.state.selectedFriends.includes(id)) {
      newSelectedFriends = this.state.selectedFriends.filter(
        friendId => friendId !== id
      );
    } else {
      newSelectedFriends = [...this.state.selectedFriends, id];
    }
    this.setState({
      selectedFriends: newSelectedFriends
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const data = {
      selectedFriends: this.state.selectedFriends
    };
    console.log("fetch", data);
  }
  render() {
    console.log(this.state.friends, this.state.selectedFriends);
    return (
        <section className="event container">
        <h2>New Event</h2>
        <div className="button-box">
            <button type="button">Close</button>
        </div>  
        <form onSubmit={e => this.onSubmit(e)}>
            <div className="eventName">
                <label htmlFor="eventName">Name:</label>
                <input required />
            </div>
            <div className="eventDescription">
                <label htmlFor="description">Description:</label>
                <input type="text" />
            </div>
            <div className="attendees">
          {this.state.friends.map(friend => {
            if (this.state.selectedFriends.includes(friend.id)) {
              return (
                <div
                  key={friend.id}
                  className="selected"
                  onClick={e => this.selectFriend(e, friend.id)}
                >
                  <img src={friend.img} className="account logo" alt="headshot of the account holder"/>
                  <p>{friend.name}</p>
                </div>
              );
            }
            return (
              <div
                key={friend.id}
                onClick={e => this.selectFriend(e, friend.id)}
              >
                <img src={friend.img} className="account logo" alt="headshot of the account holder"/>
                <p>{friend.name}</p>
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
