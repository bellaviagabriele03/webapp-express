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

//STORE - CREATE NEW REVIEWS
function storeReviews(req, res, next) {
    const data = req.body;
    const movieId = req.params.id


    const movieQuery = `SELECT * FROM movies WHERE id = ?`;
    connection.query(movieQuery, [movieId], (err, result) => {
        if (err) return next(err)
        if (result.length === 0) {
            return res.json({
                err: "404 movie not found",
                message: "ask the movie_id to Loris is better :)"
            })
        }

        const reviewsQuery = "INSERT INTO `reviews` (`movie_id`, `name`, `vote`, `text`) VALUES (?, ?, ?, ?)";

        connection.query(reviewsQuery, [movieId, data.name, data.vote, data.text], (err, result) => {
            if (err) return next(err);

            res.status(201)
            res.json({
                message: "add new review !!",
                revId: result.insertId
            })
        })


    })







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
    storeReviews,
    update,
    modify,
    destroy
}

export default controller;