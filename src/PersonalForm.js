import React, { Component } from "react";
import Title from "./Title";
import "./PersonalForm.css";

export class PersonalForm extends Component {
  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    const { name, value } = event.target;

    onChangeForm(name, value);
  };

  render() {
    const { firstName, lastName, email } = this.props;

    return (
      <div>
        <Title>Персональная информация</Title>
        <div className="personal-form">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={this.handleChangeForm}
            value={firstName}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={this.handleChangeForm}
            value={lastName}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChangeForm}
            value={email}
          />
        </div>
      </div>
    );
  }
}

export default PersonalForm;
