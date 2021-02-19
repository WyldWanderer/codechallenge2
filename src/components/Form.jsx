import React, { Component } from 'react';

class Form extends Component {
  state = {
    errorMessage: ""
  }

  submitForm(e, data) {
    e.preventDefault();
    if (Math.abs(data.lat) <= 90 && Math.abs(data.lng) <= 180) {
      this.props.saveLocation(data);
      fetch("http://localhost:3000/locations", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      })
        .then(response => response.json("Location Sent"))
    }
    else{
      this.setState({errorMessage : "Your latitude or longitude are invalid, please check the coordinates and try again"})
    }
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
        <label>
          <h6>{this.state.errorMessage}</h6>
        </label>
      </form>
    );
  }
}


export default Form;
