import express from "express"
import cors from "cors"
import topicRoutes from "./routes/topic.routes.js"
import articleRoutes from "./routes/article.routes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/topics', topicRoutes)
app.use('/articles', articleRoutes)



app.listen(8080,() => {
    console.log("server is running");
})

