import { Router } from "express";
import { allArticles,createArticle,getTopicArticles, deleteArticle } from "../services/articles.services.js";
const router = Router()

router.get('/', async (req,res) => {
    try{
        const result = await allArticles() 
        res.json({
            message: "All Articles",
            articles: result.rows
        })
    }catch(err){
        res.json({
            message: err
        })
    }
})

router.get('/:topic_id', async (req,res) => {
    try{

        const topic_id = req.params.topic_id
        const result = await getTopicArticles(topic_id)

        res.json({
            message: "TOpic Article",
            topicArticle: result.rows
        })

    }catch(err){
        res.json({
            message: "get error",
            error: err
        })
    }
})

router.post('/', async (req,res) => {
    try{
        const {topic_id,title,content,date} = req.body
        await createArticle(topic_id,title,content,date)

        res.json({
            message: "Article Added"
        })
    }catch(err){
        res.json({
            message: "post error",
            error: err
        })
    }
})

router.delete('/:id', async (req,res) => {
    try{

        const id = req.params.id
        await deleteArticle(id)

        res.json({
            message:"Deleted"
        })
    }catch(err){
        res.json({
            message: err
        })
    }
})

export default router