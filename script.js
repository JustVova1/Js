const numberOfFilms = +prompt("Cкільки фільмів ви передивились?", "");

const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actos: {},
    genres: [],
    privas: false
}

const a = prompt("Один з улюблених фільмів?", ""),
      b  = prompt("На скільки ви оцінете його?", ""),
      c = prompt("Один з улюблених фільмів?", ""),
      d  = prompt("На скільки ви оцінете його?", "");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
