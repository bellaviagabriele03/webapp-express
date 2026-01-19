import connection from "../database/db-connection.js";

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
                ...movie,
                reviews: reviewsResult,
            })
        })
    })

}

function store(req, res, next) {

}

function update(req, res, next) {

}

function modify(req, res, next) {

}

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