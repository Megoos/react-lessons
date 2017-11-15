import React, { Component } from "react";
import "./App.css";
import Step from "./Step";
import PersonalForm from "./PersonalForm";
import CardForm from "./CardForm";

const stepTitles = ["Personal information", "Card information", "Finish"];

class App extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    isTimeOver: false
  };

  handleClickNextForm = () => {
    this.setState({ step: this.state.step + 1 });
  };

  isFormCommitable = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;

    switch (step) {
      case 1:
        return (
          firstName !== "" &&
          lastName !== "" &&
          email !== "" &&
          email.includes("@")
        );
      case 2:
        return cardNumber.length === 16;
      default:
        return false;
    }
  };

  handleTabClick = stepCount => {
    this.setState({ step: stepCount });
  };

  handleChangeForm = (name, value) => {
    this.setState({ [name]: value });
  };

  handleChangeTimeOver = over => {
    this.setState({ isTimeOver: over });
  };

  renderForm = () => {
    const { step, cardNumber, firstName, lastName, email } = this.state;
    switch (step) {
      case 1:
        return (
          <PersonalForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 2:
        return (
          <CardForm
            cardNumber={cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );
      case 3:
        return "Поздравляем!";
      default:
        return "Ошибка";
    }
  };

  render() {
    const { isTimeOver, step } = this.state;

    return (
      <div className="container">
        <div className="tab-panel">
          {stepTitles.map((title, index) => (
            <Step
              key={title}
              onClick={this.handleTabClick}
              isSelected={step === index + 1}
              number={index + 1}
              isClickable={step > index + 1}
            >
              {title}
            </Step>
          ))}
        </div>
        <div className="form-content">123</div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable() || isTimeOver}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
