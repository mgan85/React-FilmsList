import React, {Component} from "react";
import FilmRecord from "./FilmRecord/FilmRecord";
import FilmsContext from './../Context';
import './FilmList.css'

/* Object create component which represent films
 * in List.
 */
class FilmList extends Component {
    /* Function render one record for list
     * film - film for which record is created
     * index - film index in array. Used to create
     *         unique key
     */
    renderOneFilmRecord(film, index) {
        return <FilmRecord
            key={index}
            Title={film.Title}
            Year={film.Year}
            Runtime={film.Runtime}
            Genre={film.Genre}
            Plot={film.Plot}
            Poster={film.Poster}
            idx={index+1}
        />
    }

    /* Function render all records for component.
     * If parameter films isn't array only one record
     * created.
     * films - collection of films which must be
     *         presented.
     */
    renderAllFilmRecords(films) {
        if(Array.isArray(films)) {
            return films.map(this.renderOneFilmRecord)
        }
        else {
            return this.renderOneFilmRecord(films, 0);
        }
    }

    // Function render control
    render() {
        return (
            <div>
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