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
      data: [
        { name: "John C.", salary: 800, increase: false, rise: false, id: 1 },
      ],
    };
  }
  //removeEmployee
  deleteItem = (id) => {
    this.setState(({ data }) => {
      console.log(id);
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };
  //newEmployee
  addUser = (name, salary, increase, rise) => {
    const id = nextId();
    console.log(id);
    const NewUser = {
      name,
      salary,
      increase,
      id,
    };
    this.setState(({ data }) => {
      const newArr = [...data, NewUser];
      return {
        data: newArr,
      };
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {...item, increase:!item.increase};
        }
        return item;
      }),
    }));
  };
  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {...item, rise:!item.rise};
        }
        return item;
      }),
    }));
  };
  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo data={data} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployersList
          data={data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm addUser={this.addUser} />
      </div>
    );
  }
}

export default App;
