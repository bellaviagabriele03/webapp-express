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