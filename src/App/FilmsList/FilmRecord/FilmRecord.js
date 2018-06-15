import React, {Component} from "react";

class FilmRecord extends Component {
    constructor(props) {
        super(props);
        this.Title=props.Title
        this.Year=props.Year
        this.Runtime=props.Runtime
        this.Genre=props.Genre
        this.Plot=props.Plot
        this.Poster=props.Poster
    }

    render() {
        return (
            <div className="FilmRecord">
                <p>{this.Title} ({this.Year})</p>
                <p>{this.Runtime} {this.Genre}</p>
                <p>{this.Plot}</p>
                <p>{this.Poster}</p>
            </div>
        );
    }
}

export default FilmRecord;