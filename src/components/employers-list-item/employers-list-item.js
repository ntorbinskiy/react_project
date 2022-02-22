import { Component } from "react";
import "./employers-list-item.css";

class EmployersListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      payRise: false,
    };
  }
  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };
  onPayRise = () => {
    this.setState(({ payRise }) => ({
      payRise: !payRise,
    }));
  };
  render() {
    const { name, salary, onDelete } = this.props;
    const { increase, payRise } = this.state;
    let inc = "list-group-item d-flex justify-content-between";
    if (increase) {
      inc += " increase";
    }
    if (payRise) {
      inc += " like";
      console.log(payRise);
    }
    return (
      <li className={inc}>
        <span className="list-group-item-label" onClick={this.onPayRise}>
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={this.onIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployersListItem;
