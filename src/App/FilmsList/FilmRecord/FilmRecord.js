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
        this.state = {
            detailVisible: false,
            imgCssClasses: 'img-fluid 1 py-3 rounded col-lg-2 col-12',
            columnCssClasses: 'col-lg-10 col-12',
            recordCssClasses: 'row bg-light m-2 border mx-auto node SmallRecord'
        }
    }

    onClick() {
        var visible = !this.state.detailVisible;
        var imgCss = visible ?
            this.state.imgCssClasses.replace('col-lg-2','col-lg-4') :
            this.state.imgCssClasses.replace('col-lg-4','col-lg-2');
        var columnCss = visible ?
            this.state.columnCssClasses.replace('col-lg-10','col-lg-8') :
            this.state.columnCssClasses.replace('col-lg-8','col-lg-10');
        var recordCss = visible ?
            this.state.recordCssClasses.replace('SmallRecord', '') :
            this.state.recordCssClasses + " SmallRecord";


        this.setState({
            detailVisible: !this.state.detailVisible,
            imgCssClasses: imgCss,
            columnCssClasses: columnCss,
            recordCssClasses: recordCss
        })
    }

    renderDetail() {
        if (this.state.detailVisible) {
            return <FilmDetails
                Genre={this.Genre}
                Runtime={this.Runtime}
                Plot={this.Plot}
            />
        }
    }

    render() {
        return (
            <div className={this.state.recordCssClasses}>
                <img src={this.Poster} alt={this.Title} className={this.state.imgCssClasses}/>
                <div className={this.state.columnCssClasses}>
                    <div className="row font-weight-bold text-left p-1 LikeLink" onClick={this.onClick.bind(this)}>
                        <h3>{this.idx}. {this.Title} ({this.Year})</h3></div>
                    {this.renderDetail()}
                </div>

            </div>
        );
    }
}

export default FilmRecord;