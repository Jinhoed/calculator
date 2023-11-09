import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      currentInput: '0',
      operator: '',
      previousInput: '',
    };
  }

  handleButtonClick = (value) => {
    if (value === 'C') {
      this.clear();
    } else if (value === '=') {
      this.calculate();
    } else {
      this.updateDisplay(value);
    }
  };

  clear = () => {
    this.setState({
      display: '0',
      currentInput: '0',
      operator: '',
      previousInput: '',
    });
  };

  calculate = () => {
    const { currentInput, previousInput, operator } = this.state;
    const current = parseFloat(currentInput);
    const previous = parseFloat(previousInput);

    if (operator === '+') {
      this.setState({ display: previous + current });
    } else if (operator === '-') {
      this.setState({ display: previous - current });
    } else if (operator === '*') {
      this.setState({ display: previous * current });
    } else if (operator === '/') {
      this.setState({ display: previous / current });
    }

    this.setState({
      currentInput: '0',
      operator: '',
      previousInput: '',
    });
  };

  updateDisplay = (value) => {
    const { currentInput } = this.state;
    if (currentInput === '0') {
      this.setState({ currentInput: value, display: value });
    } else {
      this.setState({ currentInput: currentInput + value, display: currentInput + value });
    }
  };

  setOperator = (value) => {
    const { currentInput } = this.state;
    this.setState({
      operator: value,
      previousInput: currentInput,
      currentInput: '0',
    });
  };

  render() {
    return (
      <div className="calculator">
        <input type="text" className="display" value={this.state.display} disabled />
        <div className="buttons">
          <div className="row">
            <button onClick={() => this.handleButtonClick('7')}>7</button>
            <button onClick={() => this.handleButtonClick('8')}>8</button>
            <button onClick={() => this.handleButtonClick('9')}>9</button>
            <button onClick={() => this.setOperator('+')}>+</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleButtonClick('4')}>4</button>
            <button onClick={() => this.handleButtonClick('5')}>5</button>
            <button onClick={() => this.handleButtonClick('6')}>6</button>
            <button onClick={() => this.setOperator('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleButtonClick('1')}>1</button>
            <button onClick={() => this.handleButtonClick('2')}>2</button>
            <button onClick={() => this.handleButtonClick('3')}>3</button>
            <button onClick={() => this.setOperator('*')}>*</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleButtonClick('0')}>0</button>
            <button onClick={() => this.handleButtonClick('.')}>.</button>
            <button onClick={() => this.handleButtonClick('=')}>=</button>
            <button onClick={() => this.setOperator('/')}>/</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleButtonClick('C')}>C</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;