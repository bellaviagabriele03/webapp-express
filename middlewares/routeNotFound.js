export default function routeNotFound(req, res, next) {
    res.status(404)
    res.json({
        err: "this path dosn't exsist, ask to Loris ;)",
        message: "route not found !!!"
    })
}