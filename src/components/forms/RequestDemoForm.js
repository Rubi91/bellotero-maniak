import React, { Component } from 'react';

export class RequestDemoForm extends Component {
  render() {
    return(
      <form className="form-inline">
        <div className="form-group mb-2">
          <input type="text" className="input__mail"  placeholder="Your email address"/>
          <button type="submit" className="btn btn-primary button__requestDemo">Request a demo</button>
        </div>
      </form>
    )
  }
}
