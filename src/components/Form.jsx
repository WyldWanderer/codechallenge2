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

  saveLocation(data) {
    fetch('http://localhost:3000/locations', {
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({data})
    })
  }
  
  submitForm(e, data) {
    e.preventDefault();
    this.props.saveLocation(data);
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
            type="text"/>
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
