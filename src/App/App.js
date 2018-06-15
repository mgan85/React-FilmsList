import React, { Component } from 'react';
import './App.sass';
import Service from './Service/Service';
import FilmList from './FilmsList/FilmsList'
import FilmsContext from './Context';
import DataFilms from './data/data'

class App extends Component {
    constructor() {
        super();
        this.service = this.createService();
        this.state = {films: DataFilms};
        //this.state = {films: []}
    }

    createService() {
        var service = new Service();
        service.App = this;
        return service;
    }

    featchData(url) {
        this.service.getDataFromUrl(url, (json) => {
            if (this.state.films !== json) {
                this.setState({films: json});
            }
        });
    }

    componentDidMount() {
       //this.featchData('http://time.jsontest.com');
    }

    render() {
        return (
            <div className="App">
                <FilmsContext.Provider value={this.state.films}>
                    <FilmList/>
                </FilmsContext.Provider>
            </div>
        );
    }
}

export default App;
