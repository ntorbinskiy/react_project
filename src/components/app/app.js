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
        { name: "Da C.", salary: 800, increase: true, rise: false, id: 2 },
        { name: "Alex C.", salary: 800, increase: true, rise: false, id: 3 },
      ],
      term: "",
      FilteredByRise:false
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
      rise,
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
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise };
        }
        return item;
      }),
    }));
  };
  //FilterOfEmployees
  searhEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };
  FilterByDef = ({data}) => {
    this.setState({
      data
    })
  }
  FilterByRise = () => {
    this.setState(({data}) => ({
        data:data.filter(item => item.increase),
        FilteredByRise:true
    }))
  }
  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { data, term ,FilteredByRise} = this.state;
    const employees = data.length;
    const payRise = data.filter((item) => item.increase).length;
    const visibleData = this.searhEmp(data, term);
    
    

    return (
      <div className="app">
        <AppInfo employees={employees} payRise={payRise} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter 
          FilterByRise= {this.FilterByRise}
          FilterByRiseBool={FilteredByRise}/>
        </div>
        <EmployersList
          data={visibleData}
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
