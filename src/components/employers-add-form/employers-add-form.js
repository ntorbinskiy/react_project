import "./employers-add-form.css";
import { Component } from "react";
import nextId from "react-id-generator";
class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
      id: "",
    };
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    
    e.preventDefault();
    const {name,salary,increase} = this.state;
    this.props.addUser(name,salary,increase);
    this.setState({
      name: "",
      salary: "",
      increase:"",
      rise:""
    });
  };
  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            onChange={this.onValueChange}
            value={name}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            onChange={this.onValueChange}
            value={salary}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
