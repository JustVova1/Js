const numberOfFilms = +prompt("Cкільки фільмів ви передивились?", "");

const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actos: {},
    genres: [],
    privas: false
}

if(personalMovieDB.count<10){
    alert('Просмотрено мало фильмов');
}else if(personalMovieDB.count >=10 && personalMovieDB.count<30 ){
    alert('Классический зритель');
}else if(personalMovieDB.count>=30){
    alert('Киноман');
}else{
    alert('Ошибка');
}

for(let i=0;i<2;i++){
    let a = prompt("Один з улюблених фільмів?", "");
    let b  = prompt("На скільки ви оцінете його?", "");

    if(a!=null && b!=null && a!='' && b!='' && a.length<50 && b.length<50){
        personalMovieDB[a] = b;
    }else{
        i--;
    }
    
    }
console.log(personalMovieDB);



function sayHello(a) {
    return `Hello + ${a} !`
}


function returnNeighboringNumbers(b){
    let fff=[b-1,b,b+1];
    return fff;
}

returnNeighboringNumbers(b);

function getMathResult(a,b){
    let result=`${a}`;
    if(typeof(b) === 'number'){
        for(let i =2;i<=b;i++){
            result+="-----"
            result+=`${a*i}`
        }
        return result;
    }else{
        return a;
    }
}
   
console.log(getMathResult(10,0));



