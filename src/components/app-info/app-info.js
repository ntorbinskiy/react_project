import { Component } from 'react';
import './app-info.css';

class AppInfo extends Component  {
    
    render() {
        const {data} = this.props;
        const count = data.length;
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании N</h1>
                <h2>Общее число сотрудников:{count} </h2>
                <h2>Премию получат: </h2>
            </div>
        )
    }
}

export default AppInfo;