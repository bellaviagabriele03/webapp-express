import express from "express"
import router from "./routers/movie.js";
import routeNotFound from "./middlewares/routeNotFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import cors from "cors"

const app = express();
const port = process.env.SERVER_PORT;


app.use(cors({
    origin: "http://localhost:5173",
}));


app.use(express.static("public"))
app.use(express.json())


app.use("/api/movies", router)



app.use(errorHandler)
app.use(routeNotFound)


app.listen(port, (err) => {
    if (err) throw err;

    console.log(`Server in ascolto sulla porta: ${port}`);

})