function movies(input) {

    let allMovies = [];
    for (let info of input) {

        if (info.includes('addMovie')) {
            let name = info.replace('addMovie ', '');
            allMovies.push({ name });
        } else if (info.includes('directedBy')) {
            let [name, director] = info.split(' directedBy ');
            allMovies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            });
        } else if (info.includes('onDate')) {
            let [name, date] = info.split(' onDate ');
            allMovies.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            })
        }
    }
    allMovies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'

])