import React, { Component } from 'react';
import Service from './Service/Service';
import FilmList from './FilmsList/FilmsList'
import FilmsContext from './Context';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.service = this.createService();
        this.state = {films: []}
    }

    createService() {
        var service = new Service();
        service.App = this;
        return service;
    }

    featchData(url) {
        if(url !== undefined) {
            this.service.getDataFromUrl(url, (json) => {
                if (this.state.films !== json) {
                    this.setState({films: json});
                }
            });
        }
        else {
            this.setState({films: this.service.getStaticData()})
        }
    }

    componentDidMount() {
        this.featchData();
        //this.featchData('http://www.omdbapi.com/?t=Fiddler+on+the+Roof&apikey=PlzBanMe');
    }

    render() {
        return (
            <div className="container">
                <FilmsContext.Provider value={this.state.films}>
                    <FilmList/>
                </FilmsContext.Provider>
            </div>
        );
    }
}

export default App;
