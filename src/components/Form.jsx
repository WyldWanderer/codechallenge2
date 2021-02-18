import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name : "",
      lat : "",
      lng : ""
    }
  }

  /*onNameChange = (event) => {
    this.setState({name : event.target.value})
  }

  onLatChange = (event) => {
    this.setState({lat : event.target.value})
  }

  onLngChange = (event) => {
    this.setState({lng : event.target.value})
  }

  onLocationSubmit = () => {
    fetch("http://localhost:3000/locations", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name : this.state.name,
        lat : this.state.lat,
        lng : this.state.lng
      })
    })
      .then(response => response.json("Location Sent"))
  }*/

  submitForm(e, data) {
    e.preventDefault();
    this.props.saveLocation(data);
    fetch("http://localhost:3000/locations", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({data})
    })
      .then(response => response.json("Location Sent"))
  }

  render() {
    return (
      <form className="form">
        <label>
          Name
          <input
            ref={(input) => { this.name = input }}
            type="text"
          />
        </label>
        <label>
          Lat
          <input
            ref={(input) => { this.lat = input }}
            type="text"
          />
        </label>
        <label>
          Long
          <input
            ref={(input) => { this.lng = input }}
            type="text"
            />
        </label>
        <button
          type="submit"
          onClick={(e) => this.submitForm(e, {
            name: this.name.value,
            lat: this.lat.value,
            lng: this.lng.value
          })}
        >
            Save
        </button>
      </form>
    );
  }
}


export default Form;
