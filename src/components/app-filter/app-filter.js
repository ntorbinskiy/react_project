import "./app-filter.css";

const AppFilter = ({ filter, onFilterSelect }) => {
  const buttonsData = [
    { name: "all", label: "все сотрудники" },
    { name: "rise", label: "На повышение" },
    { name: "MoreThen1000", label: "З/П больше 1000$" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    const classs = active ? "btn-light" : "btn-outline-light";
    return (
      <button className={`btn ${classs}`} 
      type="button" 
      key={name}
      onClick={()=> onFilterSelect(name)}>
        {label}
      </button>
    );
  });
  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
