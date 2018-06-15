import React, {Component} from "react";
import './FilmDetails.css'

class FilmDetails extends Component {
    constructor(props) {
        super(props);
        this.Runtime = props.Runtime
        this.Genre = props.Genre
        this.Plot = props.Plot
    }

    render() {
        return (
            <div className="p-1">
                <h6 className="row"><p className="col-lg-10 col">{this.Genre} </p> <p className="text-sm-left text-lg-right col-lg-2 col">{this.Runtime}</p></h6>
                <h5 className="row p-2">{this.Plot}</h5>
            </div>
        );
    }
}

export default FilmDetails;