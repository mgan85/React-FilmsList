import React, {Component} from "react";
import FilmDetails from './FilmDetails/FilmDetails'
import './FilmRecord.css'

class FilmRecord extends Component {
    constructor(props) {
        super(props);
        this.Title = props.Title
        this.Year = props.Year
        this.Runtime = props.Runtime
        this.Genre = props.Genre
        this.Plot = props.Plot
        this.Poster = props.Poster
        this.idx = props.idx
    }

    render() {
        return (
            <div className="row bg-light m-2 border">
                <img src={this.Poster} alt={this.Title} className="img-fluid pt-2 rounded col-lg-4 col-"/>
                <div className="col-lg-8 col-">
                    <div className="row font-weight-bold text-left p-1"><h3>{this.idx}. {this.Title} ({this.Year})</h3></div>
                    <FilmDetails
                        Genre={this.Genre}
                        Runtime={this.Runtime}
                        Plot={this.Plot}
                    />
                </div>

            </div>
        );
    }
}

export default FilmRecord;