import React, { Component } from 'react';

class Form extends Component {
  //added state for error message updating
    state = {
      data: [],
      locationsLength: 3,
      errorMessage: ""
    }
  
  submitForm(e, data) {
    e.preventDefault(); 
  //input validation logic
    if (Math.abs(data.lat) <= 90 && Math.abs(data.lng) <= 180 && data.name.length >= 1) {
      this.props.saveLocation(data)
    }
    else {
      this.setState({errorMessage : "One of your inputs are invalid, please ensure a name is entered and the coordinates are correct."})
    }
  };

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
