/**
 * Человек.
 * @param {string} name
 */
function Person(name, watchedMovies = []) {
  // Код тут.
  this.name = name;
  this.watchedMovies = watchedMovies;
  this.watchedMovies.toString = function () {
    return watchedMovies.map((el, index) => `${index + 1} ${el.title}`).join(' ')
  }
}

Person.prototype.watchMovie = function (movie) {
  // Код тут.
  movie.play();
  if (!this.watchedMovies.includes(movie)) {

    this.watchedMovies.push(movie);
  }
};

module.exports = { Person };
