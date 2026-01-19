import express from "express"
import router from "./routers/movie.js";

const app = express();
const port = process.env.SERVER_PORT;

app.use("/api/movies", router)

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta: ${port}`);
    
})