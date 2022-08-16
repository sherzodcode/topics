import {client} from "../configs/database.js"


const allArticlesSQL = `SELECT * FROM articles;`

const topicArticlesSQL = `SELECT * FROM articles WHERE topic_id = $1;`

const createArticleSQL = `INSERT INTO articles(topic_id,title,content,date)
    VALUES($1,$2,$3,$4);
`

const deleteArticleSQL = `DELETE FROM articles WHERE id = $1;`


export function allArticles(){
    return client.query(allArticlesSQL)
}

export function getTopicArticles(topic_id){
    return client.query(topicArticlesSQL, [topic_id])
}

export function createArticle(topic_id,title,content,date){
    return client.query(createArticleSQL,[topic_id,title,content,date])
}


export function deleteArticle(id){
    return client.query(deleteArticleSQL,[id])
}