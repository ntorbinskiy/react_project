import "./app-filter.css";

const AppFilter = ({FilterByRise,FilterByRiseBool}) => {
    const def = "btn btn-outline-light";
    let neW= def.slice(4,12);
    console.log(neW);
  return (
    <div className="btn-group">
      <button className={FilterByRise ? def : neW} type="button">
        Все сотрудники
      </button>
      <button className={FilterByRise ? def : neW}
      type="button"
      onClick={FilterByRise} >
        На повышение
      </button>
      <button className={FilterByRise ? def : neW} type="button">
        З/П больше 1000$
      </button>
    </div>
  );
};

export default AppFilter;
