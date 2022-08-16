import {client} from "../configs/database.js"

const allTopicsSQL = `SELECT * FROM topics;`

const createTopicSQL = `INSERT INTO topics(name)
    VALUES($1)
`

const deleteTopicSQL = `DELETE FROM topics WHERE id = $1`


export function allTopics(){
    return client.query(allTopicsSQL)
}


export function createTopic(name){
    client.query(createTopicSQL,[name])
}

export function deleteTopic(id){
    return client.query(deleteTopicSQL,[id])
}


