import connection from "../database/db-connection.js";



//INDEX - SHOW ALL MOVIES
function index(req, res, next) {
    const query = `SELECT * FROM movies`
    connection.query(query, (err, result) => {
        if (err) return next(err)

        const movies = result;
        res.status(200);
        res.json({
            count: movies.length,
            result: movies
        })
    })
}



//SHOW - SHOW A SINGLE MOVIE WITH ITS REVIEWS
function show(req, res, next) {
    const id = req.params.id;
    const movieQuery = `SELECT * FROM movies WHERE id = ?`

    connection.query(movieQuery, [id], (err, movieResult) => {
        if (err) return next(err)

        const movie = movieResult;

        const reviewsQuery = `SELECT * FROM reviews WHERE movie_id = ?`
        connection.query(reviewsQuery, [id], (err, reviewsResult) => {
            if (err) return next(err)

            res.status(200);
            res.json({
                result: movie[0],
                reviews: reviewsResult

            })
        })
    })

}

//STORE - CREATE A NEW MOVIE
function store(req, res, next) {
    // const data = req.body;
    // const query = `INSERT INTO reviews (name, vote, text) VALUES (?, ?, ?)`

    console.log("aggiungo nuova review");
    
}


//UPDATE - UPDATE A MOVIE  
function update(req, res, next) {

}


//MODIFY - PARTIALLY UPDATE A MOVIE

function modify(req, res, next) {

}
//DESTROY - DELETE A MOVIE
function destroy(req, res, next) {

}

const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}

export default controller;