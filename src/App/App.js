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

    /* Function create service which allow
     * get data from url or json file
     */
    createService() {
        var service = new Service();
        service.App = this;
        return service;
    }

    /* Function get data from servise and
     * when promise is fulfilled save this
     * data in state
     */
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

    /* Function which is invoked immediately
     * after a component is mounted. This
     * function start fetch data.
     */
    componentDidMount() {
        this.featchData();
        //this.featchData('http://www.omdbapi.com/?t=Gladiator&y=2000&plot=full&apikey=PlzBanMe');
    }

    //Function render App
    render() {
        return (
            <div className="container-fluid">
                <FilmsContext.Provider value={this.state.films}>
                    <FilmList/>
                </FilmsContext.Provider>
            </div>
        );
    }
}

export default App;
