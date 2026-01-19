import express from "express"
import router from "./routers/movie.js";
import routeNotFound from "./middlewares/routeNotFound.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const port = process.env.SERVER_PORT;

app.use("/api/movies", router)


app.use(routeNotFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta: ${port}`);
    
})