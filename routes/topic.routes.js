import { Router } from "express";
import { allTopics, createTopic , deleteTopic} from "../services/topic.services.js";

const router = Router()

router.get('/', async (req,res) => {
    try{
        const result = await allTopics()

        res.json({
            message: "All topics",
            topics: result.rows
        })
    }catch(err){
        res.json({
            message: err
        })
    }
})



router.post('/', async (req,res) => {
    try{
        const name = req.body
        await createTopic(name)

        res.json({
            message: "Topic added"
        })
    }catch(err){
        res.json({
            message: err
        })
    }
})


router.delete('/:id', async (req,res) => {
    try{

        const id = req.params.id
        await deleteTopic(id)

        res.json({
            message: "Topic deleted"
        })

    }catch(err){
        res.json({
            message: err
        })
    }
})


export default router