import React, {Component} from "react";
import FilmRecord from "./FilmRecord/FilmRecord";
import FilmsContext from './../Context';

class FilmList extends Component {
    renderOneFilmRecord(film, index) {
        return <FilmRecord
            key={index}
            Title={film.Title}
            Year={film.Year}
            Runtime={film.Runtime}
            Genre={film.Genre}
            Plot={film.Plot}
            Poster={film.Poster}
        />
    }

    renderAllFilmRecords(films) {
        if(Array.isArray(films)) {
            return films.map(this.renderOneFilmRecord)
        }
        else {
            return this.renderOneFilmRecord(films, 0);
        }
    }

    render() {
        return (
            <div className="FilmList">
                <FilmsContext.Consumer>
                    {(context) => {
                        return this.renderAllFilmRecords(context);
                    }}
                </FilmsContext.Consumer>
            </div>
        );
    }
}

export default FilmList;