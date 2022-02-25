import { Component } from 'react';
import './app-info.css';

class AppInfo extends Component  {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count:"",
    //         payRise:""
    //     }
    // }
    // setEmployeeCount = ({data}) => {
    //     const count = data.length;
    //     this.setState({
    //         count:this.state.min=count
    //     })
    // }
    render() {
        const {data} = this.props;
        const count = data.length;
        let k=0;
        for(let i=0;i<data.length;i++) {
            if(data[i].rise===true) {
                k++;
            }
        }
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании NiggaPhone</h1>
                <h2>Общее число сотрудников:{count} </h2>
                <h2>Премию получат:{k} </h2>
            </div>
        )
    }
}

export default AppInfo;