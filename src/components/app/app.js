import nextId from "react-id-generator";
import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployeesAddForm from "../employers-add-form/employers-add-form";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ name: "John C.", salary: 800, id: 1 }],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      console.log(id);
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };
  addUser = (name, salary) => {
    const id = nextId();
    console.log(id);
    const NewUser = {
      name,
      salary,
      id,
    };
    this.setState(({ data }) => {
      const newArr = [...data, NewUser];
      return {
        data: newArr,
      };
    });
  };
  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo data={data}/>

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployersList data={data} onDelete={this.deleteItem} />
        <EmployeesAddForm addUser={this.addUser} />
      </div>
    );
  }
}

export default App;
