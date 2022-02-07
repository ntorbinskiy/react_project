import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';
import './app.css';

function App() {

    const data = [
        {name: "John C.", salary: 800},
        {name: "Alex M.", salary: 3000},
        {name: "Chris L.", salary: 5000}
    ]
    return(
<div className="app" >
	<AppInfo/>
	
	<div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
	</div>
    <EmployersList data={data}/>
    <EmployeesAddForm/>
</div>

    );
}

export default App;