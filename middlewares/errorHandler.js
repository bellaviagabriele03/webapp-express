export default function errorHandler(err, req, res, next) {
    res.status(500);
    res.json({
        err: process.env.ENVIRONMENT = "develoment" ? err : "Internal Problem, ask to Samuel for fixing :)",
        message: "Server is hacked from Loris :o"
    })
}