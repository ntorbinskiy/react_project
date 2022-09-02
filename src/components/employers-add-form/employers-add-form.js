import "./employers-add-form.css";
import { useState } from "react";
import nextId from "react-id-generator";
const EmployeesAddForm = (props) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onValueChange = (e) => {
    setSalary(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.addUser(name, salary);
    setName("");
    setSalary("");
  };
  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          onChange={onNameChange}
          value={name}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          name="salary"
          onChange={onValueChange}
          value={salary}
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
}

export default EmployeesAddForm;
