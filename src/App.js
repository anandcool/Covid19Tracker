import React from 'react'

import {Cards,Chart,CountryPicker} from './components/index';
import Styles from './App.module.css'
import {fetchData} from './api';

class App extends React.Component{

    state ={
        data:{}
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
    }

    render(){
        const {data} = this.state
        return (
            <div className={Styles.container}>
                <Cards data={data}/>
                <CountryPicker/>
                <Chart/>
            </div>
        )
    }
}

export default App;