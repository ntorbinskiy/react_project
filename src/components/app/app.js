import nextId from "react-id-generator";
import { useState } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployeesAddForm from "../employers-add-form/employers-add-form";
import "./app.css";

const App = () => {
	const [data, setData] = useState([]);
	const [term, setTerm] = useState("");
	const [filter, setFilter] = useState("");
	//removeEmployee
	const deleteItem = (id) => {
		setData(data.filter((item) => item.id !== id));
	};
	//newEmployee
	const addUser = (name, salary, increase, rise) => {
		const id = nextId();
		console.log(id);
		const NewUser = {
			name,
			salary,
			increase,
			rise,
			id,
		};
		const newArr = [...data, NewUser];
		setData(newArr);
	};

	const onToggleIncrease = (id) => {
		setData(data.map((item) => {
			if (item.id === id) {
				return { ...item, increase: !item.increase };
			}
			return item;
		}))
	};

	const onToggleRise = (id) => {
		setData(data.map((item) => {
			if (item.id === id) {
				return { ...item, rise: !item.rise };
			}
			return item;
		}))
	};
	//FilterOfEmployees
	const searhEmp = (items, term) => {
		console.log(term);
		if (term.length === 0) {
			return items;
		}
		return items.filter((item) => {
			return item.name.indexOf(term) > -1;
		});
	};
	const UpdateSearch = (term) => {
		setTerm(term);
		console.log(term);
	};
	const filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter(item => item.rise);
			case 'MoreThen1000':
				return items.filter(item => item.salary > 1000);
			default:
				return items;
		}
	}

	const onFilterSelect = (filter) => {
		setFilter(filter);
	}
	const employees = data.length;
	const payRise = data.filter((item) => item.increase).length;
	const visibleData = filterPost(searhEmp(data, term), filter);



	return (
		<div className="app">
			<AppInfo employees={employees} payRise={payRise} />

			<div className="search-panel">
				<SearchPanel onUpdateSearch={UpdateSearch} />
				<AppFilter filter={filter}
					onFilterSelect={onFilterSelect} />
			</div>
			<EmployersList
				data={visibleData}
				onDelete={deleteItem}
				onToggleIncrease={onToggleIncrease}
				onToggleRise={onToggleRise}
			/>
			<EmployeesAddForm addUser={addUser} />
		</div>
	);
}

export default App;
