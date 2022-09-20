import React, { Component } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

export default class MovieItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditMode: false,
      title: '',
      genre: '',
      poster_img: '',
      mpaa_rating: 0
    }

    this.deleteMovie = this.deleteMovie.bind(this);
    this.getStars = this.getStars.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.editMovie = this.editMovie.bind(this);
  }
  getStars(rating) {
    let myArr = [];
    for (let i = 1; i <= rating; i++) {
      myArr.push(i)
    }
    return myArr;
  }

  deleteMovie(event) {
    let currentId = this.props.movie.id
    axios.delete(`http://127.0.0.1:5000/movie/delete/${currentId}`)
      .then(res => res.JSON())
      .catch(err => { console.error(err) })
  }

  editMovie(event) {
    let currentId = this.props.movie.id
    let data = {
      title: `${this.state.title ? this.state.title : this.props.movie.title}`,
      genre: `${this.state.genre ? this.state.genre : this.props.movie.genre}`,
      poster_img: `${this.state.poster_img ? this.state.poster_img : this.props.movie.poster_img}`,
      mpaa_rating: `${this.state.mpaa_rating ? this.state.mpaa_rating : this.props.mpaa_rating}`
    }
    axios.put(`http://127.0.0.1:5000/movie/edit/${currentId}`, data)
      .then(res => { console.log(res) })
      .catch(err => { console.error(err) })
    this.handleEditClick()
  }

  handleEditClick() {
    this.setState({ isEditMode: !this.state.isEditMode })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidUpdate() {
    this.props.getMovies();
  }
  render() {


    const { id, title, genre, mpaa_rating, poster_img } = this.props.movie
    return (
      <div className="movie-card">
        <h3>{title}</h3>
        <p>Genre: {genre}</p>
        <img src={poster_img} crossOrigin="anonymous" alt={id} />
        <p>Rating: {this.getStars(mpaa_rating).map(ele => { return <FaStar key={ele} className="star" /> })}</p>
        {this.state.isEditMode ? (
          <div className="edit-form">
            <form onSubmit={this.editMovie}>
              <label>Title:</label>
              <input onChange={this.handleChange} name="title" />

              <label>Genre:</label>
              <input onChange={this.handleChange} name="genre" />

              <label>Rating:</label>
              <input onChange={this.handleChange} name="mpaa_rating" />

              <label>Image:</label>
              <input onChange={this.handleChange} name="poster_img" />

              <button type="submit">Edit Movie</button>
            </form>
          </div>
        ) :
          <div className="hover-btns">
            <button onClick={this.handleEditClick}>Edit</button>
            <button type="button" onClick={this.deleteMovie}>Delete</button>
          </div>
        }
      </div >
    )
  }
}