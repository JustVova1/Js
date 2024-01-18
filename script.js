let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Cкільки фільмів ви передивились?", "");

    while(numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Cкільки фільмів ви передивились?", "");
    }
}

start();


const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actos: {},
    genres: [],
    privat: false
}


function rememberMyFilms(){
    for(let i=0;i<2;i++){
        let a = prompt("Один з улюблених фільмів?", "");
        let b  = prompt("На скільки ви оцінете його?", "");
    
        if(a!=null && b!=null && a!='' && b!='' && a.length<50 && b.length<50){
            personalMovieDB[a] = b;
        }else{
            i--;
        }
        
    }
}

// rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count<10){
        alert('Просмотрено мало фильмов');
    }else if(personalMovieDB.count >=10 && personalMovieDB.count<30 ){
        alert('Классический зритель');
    }else if(personalMovieDB.count>=30){
        alert('Киноман');
    }else{
        alert('Ошибка');
    }
}

// detectPersonalLevel();



function showMyDB(hidden){
    if(hidden!= false){
        console.log(personalMovieDB)
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres(genres){
    for(let i=1;i<=3;i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимий жанр під номером ${i}`, "");
    }
}

writeYourGenres(personalMovieDB.genres);