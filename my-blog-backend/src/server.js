import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
// import { MongoClient } from 'mongodb'
// const { MongoClient } = require('mongodb')

const mongoose = require('mongoose')

// const articlesInfo = {
//   'learn-react': {
//     upvotes: 0,
//     comments: []
//   },
//   'learn-scala': {
//     upvotes: 0,
//     comments: []
//   },
//   'learn-idris': {
//     upvotes: 0,
//     comments: []
//   },
//   'my-thoughts-on-resumes': {
//     upvotes: 0,
//     comments: []
//   }
// }

const app = express()

app.use(express.static(path.join(__dirname, '/build')))
app.use(bodyParser.json())

const withDB = async (operations, res) => {
  try {
    var mongoDB = 'mongodb://localhost/my-blog'
    mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    var db = mongoose.connection

    await operations(db)
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to db', error })
  } finally {
    await db.close()
  }
}

app.get('/api/articles/:name', async (req, res) => {
  withDB(async db => {
    const articleName = req.params.name
    const articleInfo = await db
      .collection('articles')
      .findOne({ name: articleName })
    res.status(200).json(articleInfo)
  }, res)
})

app.get('/api/articles', async (req, res) => {
  withDB(async db => {
    const articles = await db
      .collection('articles')
      .find({ })
    res.status(200).json(articles)
  }, res)
})

async function listDatabases(client) {
  databasesList = await client
    .db()
    .admin()
    .listDatabases()

  console.log('Databases:')
  databasesList.databases.forEach(db => console.log(` - ${db.name}`))
}

// app.get('/hello', (req, res) => res.send('Hello!'))
// app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}!`))
// app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`))

app.post('/api/articles/:name/upvote', async (req, res) => {
  withDB(async db => {
    const articleName = req.params.name

    const articleInfo = await db
      .collection('articles')
      .findOne({ name: articleName })
    await db.collection('articles').updateOne(
      { name: articleName },
      {
        $set: {
          upvotes: articleInfo.upvotes + 1
        }
      }
    )

    const updatedArticleInfo = await db
      .collection('articles')
      .findOne({ name: articleName })

    res.status(200).send(updatedArticleInfo)
  }, res)
})

app.post('/api/articles/:name/comment', (req, res) => {
  const { username, text } = req.body
  const articleName = req.params.name
  withDB(async db => {
    const articleInfo = await db.collection('articles').findOne({ name: articleName })
    await db.collection('articles').updateOne(
      { name: articleName },
      {
        $set: {
          comments: articleInfo.comments.concat({ username, text })
        }
      }
    )
    const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName })

    res.status(200).send(updatedArticleInfo)
  }, res)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(8000, () => console.log('listening on port 8000!'))
